/* The demo system: a SIP tracker for Indian mutual funds.
   Everything here is a worked example of one real product decision set.
   The numbers are from a synthetic 18-month book of 240 instalments across
   6 funds and 3 investors. Nothing here is a live account.

   Every FLOW step carries `src`, the question id whose answer created it.
   That is the whole point: the diagram can name the decision behind each rule. */

window.META = {
  product: "A SIP tracker",
  premise: "Three investors, six funds, 240 monthly instalments over 18 months.",
  built: "The agent built the tracker. Then it wrote these questions about the calls it had already made without being told.",
};

window.QUESTIONS = [
{
  id: "S1", cat: "What counts as an instalment", sub: "Calendar", weight: "critical",
  q: "The SIP date lands on a market holiday. I made it debit on the next working day. Should it?",
  lede: "This decides whether a year has twelve instalments or eleven.",
  now: "scheduler.py rolls any SIP date that is not a trading day forward to the next one. In the 18 month book that moved 14 of 240 instalments. Four of those crossed a month boundary, so those months show two debits and the following month shows none.",
  why: "Nobody specified it. Rolling forward is the default in every scheduling library I looked at, so that is what got written. The AMC mandate itself does not roll: it presents on the fixed date and fails if the market is shut.",
  problem: "So the tracker and the bank statement disagree 14 times, and 4 of those disagreements move money across a month boundary. Any monthly report built on this is wrong for those months, and the investor sees a month where they appear to have skipped.",
  evidence: [
    { type: "table", title: "What the roll actually did",
      cols: ["", "count", "effect"],
      rows: [
        ["Instalments in the book", "240", "18 months, 3 investors"],
        ["Dates that hit a holiday", "14", "5.8% of all instalments"],
        ["Rolled within the same month", "10", "harmless, dates shift by 1 to 2 days"],
        ["Rolled across a month boundary", "4", "one month shows 2, the next shows 0"]] },
    { type: "note", title: "The thing that makes this a decision and not a bug",
      body: "Rolling forward is defensible. So is skipping. So is presenting anyway and recording the failure. All three are used by real platforms. What is not defensible is picking one silently and then reporting monthly figures as if the choice had no effect." }
  ],
  options: [
    { k: "a", label: "Roll forward to the next working day, and re-stamp the instalment to its ORIGINAL month", impact: "Keeps twelve instalments a year and keeps monthly reports honest. Costs a schema change: the instalment needs both a due month and an executed date." },
    { k: "b", label: "Roll forward and let it land in whatever month it lands in", impact: "What happens today. Simplest code. Four months a year read wrong and nobody can tell from the report that a roll caused it." },
    { k: "c", label: "Skip the month entirely if the date is a holiday", impact: "Matches what the bank mandate actually does when it fails. Honest, and the investor loses an instalment they intended to make." },
    { k: "d", label: "Present on the original date and record the failure, then retry once", impact: "Closest to reality, most moving parts. Needs a retry policy, which is question S7." }
  ],
  rec: "a",
  recCase: "The disagreement with the bank statement is not the expensive part. The expensive part is that four months a year silently carry the wrong count, and a reader cannot see it. Separating due month from executed date fixes the reporting without changing behaviour, and it makes the roll visible instead of invisible."
},
{
  id: "S2", cat: "What counts as an instalment", sub: "Failure", weight: "critical",
  q: "A bank mandate bounced. I marked that SIP as missed. Is a failed mandate a missed instalment or a paused one?",
  lede: "The word decides whether the investor looks inconsistent or the bank looks unreliable.",
  now: "On a mandate failure the instalment is written with status missed and the SIP continues. The book has 9 of these. The investor dashboard counts them in a field called Instalments missed, which currently reads 9.",
  why: "missed was the only failure status in the enum when the debit handler was written. I added the handler before there was a vocabulary for why something did not happen.",
  problem: "Missed reads like the investor did not have the money. Six of the nine were a bank side NACH rejection during a scheduled outage. Those are not the same event and they should not share a label, particularly on a screen the investor sees.",
  evidence: [
    { type: "stat", title: "The nine failures, by actual cause",
      items: [
        ["Bank side outage", "6", "NACH window down, all on the same two dates"],
        ["Insufficient balance", "2", "genuinely the investor"],
        ["Mandate expired", "1", "nobody renewed it"]] },
    { type: "note", title: "Why one label is not enough",
      body: "These three need different downstream behaviour. An outage should retry. Insufficient balance should notify and not retry immediately. An expired mandate should stop the SIP and ask for a new one. One status cannot drive three behaviours." }
  ],
  options: [
    { k: "a", label: "Split the status into failed-bank, failed-funds, and mandate-expired", impact: "Correct and the most work. Every consumer of the status has to be updated, and the dashboard needs three counters instead of one." },
    { k: "b", label: "Keep one status, add a reason code alongside it", impact: "Cheaper. The dashboard can stay as it is today and get more precise later. Reason code becomes the thing everyone actually reads, which is a smell." },
    { k: "c", label: "Leave it as missed and explain it in the UI copy", impact: "Zero engineering. Puts the burden on the reader of a number that is wrong, which is how the current report already fails." },
    { k: "d", label: "Do not count bank side failures in the missed total at all", impact: "The headline number becomes defensible immediately. Hides a real operational problem: six failures on two dates is worth someone noticing." }
  ],
  rec: "a",
  recCase: "This is the one place where the cheap option genuinely costs more later. Three causes need three behaviours, and a reason code bolted to a wrong status means every consumer has to know to read past the status. Do it properly while there are only nine rows to migrate."
},
{
  id: "S3", cat: "What a return means", sub: "Method", weight: "critical",
  q: "I compute return as XIRR. You never told me which return to show. Absolute and CAGR give a different answer on the same book.",
  lede: "Three correct numbers, three different headlines, one investor.",
  now: "portfolio.py returns XIRR on the full cashflow series. On the demo book that is 12.4%. The same book shows 18.9% as absolute return and 11.8% as CAGR from first instalment. All three are arithmetically correct.",
  why: "XIRR is the right default for irregular cashflows and it is what a SIP is. I picked it because it is defensible, not because anyone asked for it.",
  problem: "The three numbers differ by 7.1 percentage points on the same money. Whichever one goes on the dashboard becomes the number the investor quotes, compares against other platforms, and makes decisions on. That is a product decision wearing a maths costume.",
  evidence: [
    { type: "table", title: "Same book, three methods",
      cols: ["method", "figure", "what it answers"],
      rows: [
        ["XIRR", "12.4%", "annualised, respects when each rupee arrived"],
        ["Absolute", "18.9%", "total gain over total invested, ignores timing"],
        ["CAGR from first instalment", "11.8%", "treats it as one lump sum on day one"]] },
    { type: "note", title: "Why absolute looks best and is the most misleading",
      body: "Absolute return ignores that most of the money arrived recently. Money invested three months ago has not had time to compound, and absolute return credits it as though it had. It is the highest number here and the one most platforms lead with." }
  ],
  options: [
    { k: "a", label: "Lead with XIRR, show the other two on tap", impact: "Most defensible. XIRR is the industry standard for SIPs and the one a financial adviser expects. The headline number is the lowest of the three." },
    { k: "b", label: "Lead with absolute return", impact: "Highest number, easiest to explain to a first time investor. Sets an expectation the portfolio may not meet and is not comparable across time." },
    { k: "c", label: "Show all three with equal weight", impact: "Honest and confusing. Most users will pick the biggest one and remember that." },
    { k: "d", label: "Let the investor choose a default in settings", impact: "Avoids the decision by shipping it to the user, who has less context than you do to make it." }
  ],
  rec: "a",
  recCase: "XIRR is the only one of the three that answers the question a SIP investor is actually asking, which is what did my money earn given when I put it in. Leading with the lowest number is a cost worth paying, and showing the other two on tap means nobody thinks something is being hidden."
},
{
  id: "S4", cat: "What a return means", sub: "Costs", weight: "high",
  q: "I show returns before exit load and before capital gains tax. Should the headline be gross or net?",
  lede: "The gap is largest exactly when the investor is most likely to act on it.",
  now: "Returns are gross. Exit load is modelled in the data but not applied to the displayed figure. Capital gains tax is not modelled at all.",
  why: "Exit load only applies if you redeem, and tax depends on the investor's slab and holding period, neither of which the tracker knows. Gross was the only figure I could compute without asking for more information.",
  problem: "For units held under one year in an equity fund, the demo book shows 12.4% gross and roughly 10.4% after a 1% exit load and 15% short term capital gains. An investor deciding whether to redeem is looking at the number that is least relevant to that decision.",
  evidence: [
    { type: "stat", title: "Where the gap bites",
      items: [
        ["Units under 12 months old", "38% of the book", "exit load applies to all of them"],
        ["Gross return shown", "12.4%", "what the dashboard says"],
        ["After exit load and STCG", "about 10.4%", "what a redemption today would realise"]] }
  ],
  options: [
    { k: "a", label: "Keep gross as the headline, show a redeem-today estimate on the redemption screen", impact: "Puts the net figure exactly where the decision is made and nowhere else. Needs the redemption screen to know holding periods per lot." },
    { k: "b", label: "Make the headline net of exit load, leave tax out", impact: "More honest headline, and exit load is knowable without asking the investor anything. Tax remains the invisible part." },
    { k: "c", label: "Model tax too, and ask the investor for their slab", impact: "Most accurate and adds an onboarding question most users will skip or get wrong." },
    { k: "d", label: "Leave it gross and put a footnote", impact: "Cheapest. Footnotes are not read at the moment of a redemption decision." }
  ],
  rec: "a",
  recCase: "Exit load and tax are decision-time facts, not dashboard facts. Putting the net estimate on the redemption screen is where it changes behaviour, and it avoids making the everyday number depend on a tax slab the tracker would have to ask for and keep current."
},
{
  id: "S5", cat: "What I decided without asking", sub: "Retries", weight: "critical",
  q: "When a mandate failed I retried it once, three days later, on my own. You never authorised a retry.",
  lede: "This one moves real money on a schedule nobody approved.",
  now: "debit_handler.py retries once after 72 hours on any failure. It fired 7 times in the demo book. 5 succeeded. 2 failed again and stopped.",
  why: "I wrote the retry while handling the bank outage case, because retrying an outage is obviously correct. I did not separate that from retrying an insufficient balance, which is not obviously correct at all.",
  problem: "Two of the seven retries hit accounts that had failed for insufficient funds. Retrying those can trigger a second bank penalty on the investor's account. I chose to do that. Nobody told me to, and the investor never saw a prompt.",
  evidence: [
    { type: "table", title: "The seven retries, by original cause",
      cols: ["original failure", "retries", "outcome"],
      rows: [
        ["Bank outage", "5", "all 5 succeeded"],
        ["Insufficient funds", "2", "both failed again, possible penalty"]] },
    { type: "note", title: "Why this is the most important question in the set",
      body: "Every other question here is about how to describe something. This one is about an action the system takes with the investor's bank account, chosen by the agent, unreviewed, and already executed seven times." }
  ],
  options: [
    { k: "a", label: "Retry only bank side failures. Never auto-retry insufficient funds", impact: "Matches the two causes to two behaviours. Investor is notified instead of re-debited when the problem is their balance." },
    { k: "b", label: "Keep retrying everything, but notify the investor before the retry", impact: "Preserves the recovery rate and gives the investor a chance to fund the account or cancel. Adds a notification path and a window." },
    { k: "c", label: "Stop all automatic retries. Require a manual trigger", impact: "Safest and slowest. Five successful recoveries in the demo book would have needed someone to press a button." },
    { k: "d", label: "Leave it as is", impact: "Keeps a money-moving behaviour that no human approved, on the record, now that it has been surfaced." }
  ],
  rec: "a",
  recCase: "The five bank outage retries are pure upside and should keep running. The two insufficient funds retries risk a penalty on the investor's account for no gain, since both failed again. Splitting on cause keeps the value and removes the harm, and it depends on S2 being answered first."
},
{
  id: "S6", cat: "What I decided without asking", sub: "Pausing", weight: "high",
  q: "After three consecutive failures I paused the SIP automatically. That rule is mine, not yours.",
  lede: "A pause is a decision to stop investing someone's money.",
  now: "Three consecutive failures sets the SIP to paused and sends one email. It has fired once in the demo book, on the investor whose mandate had expired.",
  why: "Three is a common threshold and it stops the system hammering a dead mandate. I chose the number because it is the number I have seen elsewhere, not because it was derived from anything here.",
  problem: "A paused SIP stops buying units. If the pause is wrong, the investor misses market exposure for however long it takes them to read the email and act. The one real case was an expired mandate, where pausing was correct. The rule would fire identically on three bank outages in a row, where it would be wrong.",
  evidence: [
    { type: "stat", title: "What the rule has actually seen",
      items: [
        ["Times the pause rule fired", "1", "the expired mandate case"],
        ["Was it correct that time", "yes", "the mandate genuinely needed renewal"],
        ["Consecutive bank outages in the book", "2", "one more and it would have paused wrongly"]] }
  ],
  options: [
    { k: "a", label: "Pause only on mandate-expired. Never pause for bank or funds failures", impact: "The rule fires only when the cause is structural. Depends on S2." },
    { k: "b", label: "Keep three-strikes but only count investor-side failures", impact: "Keeps a safety net for repeated funding problems without punishing bank outages." },
    { k: "c", label: "Never pause automatically. Flag for a human instead", impact: "No automatic stop on anyone's investing. Needs somebody to actually watch the flag." },
    { k: "d", label: "Keep it exactly as it is", impact: "Known to be one bank outage away from a wrong pause." }
  ],
  rec: "b",
  recCase: "Pausing on repeated investor-side failure is genuinely useful and worth keeping. Pausing because a bank had a bad week is not. Counting only investor-side failures preserves the protection and removes the false positive, and it is a smaller change than option a."
},
{
  id: "S7", cat: "Where two answers exist", sub: "Authority", weight: "critical",
  q: "Our unit balance and the AMC statement disagree on two funds. Which one is authoritative?",
  lede: "Only you can answer this. It is a policy question wearing a reconciliation costume.",
  now: "The tracker treats its own computed balance as the source of truth and reports the AMC figure as a discrepancy. Two funds are currently off, by 0.003 and 0.017 units.",
  why: "The tracker computes units from amount divided by NAV at allotment. The AMC rounds to three decimals at its own cut-off and occasionally applies a different NAV than the one published for that date.",
  problem: "The differences are tiny in rupees, under 30 rupees combined. They are not tiny in principle. If the investor redeems on our number and the AMC holds a different one, the redemption fails or short-settles, and the tracker was the thing that was wrong.",
  evidence: [
    { type: "table", title: "The two discrepancies",
      cols: ["fund", "our units", "AMC units", "difference"],
      rows: [
        ["Large Cap Index", "142.338", "142.335", "0.003"],
        ["Mid Cap Growth", "88.104", "88.121", "0.017"]] },
    { type: "note", title: "Why the size of the difference is a trap",
      body: "Thirty rupees is easy to wave away, and that is what makes it dangerous. The rounding rule that produces a 0.017 unit gap on a small book produces a proportionally larger one on a large book, and the reconciliation only gets harder to unpick the longer the two numbers are allowed to drift." }
  ],
  options: [
    { k: "a", label: "AMC statement is authoritative. Reconcile to it on every statement", impact: "The tracker can never be wrong at redemption. Requires a statement ingestion path and accepting that our number changes retroactively." },
    { k: "b", label: "Our number is authoritative, flag differences over a threshold", impact: "What happens today. Fast, and it means the redeemable balance can be wrong." },
    { k: "c", label: "Show both and never silently pick", impact: "Honest to the point of being unusable. Every screen with a balance now has two." },
    { k: "d", label: "Match the AMC rounding rule exactly so they cannot diverge", impact: "Fixes the cause rather than the symptom, if the rule can be pinned down. It is not published, so this is reverse engineering." }
  ],
  rec: "a",
  recCase: "The AMC holds the units. Whatever our arithmetic says, their register is what settles a redemption. Reconciling to it means our number can move retroactively, which is uncomfortable, and it is strictly better than being confidently wrong at the exact moment money moves."
},
{
  id: "S8", cat: "Where two answers exist", sub: "Timing", weight: "high",
  q: "Which NAV applies to an instalment, the one on the debit date or the one at the cut-off after funds clear?",
  lede: "Two dates, two NAVs, and the gap is where units go missing.",
  now: "The tracker applies the NAV published for the debit date. In practice the AMC applies the NAV of the day funds actually clear, which for these mandates is usually the same day and sometimes the next.",
  why: "The debit date is the only date the tracker knows without ingesting a statement. The clearing date is not in any feed available to it.",
  problem: "On 11 of 240 instalments the funds cleared the following day, and the NAV moved between the two. That is the single largest contributor to the unit discrepancies in S7.",
  evidence: [
    { type: "stat", title: "The gap",
      items: [
        ["Instalments where clearing slipped a day", "11", "4.6% of the book"],
        ["Largest single day NAV move among them", "1.8%", "on a mid cap fund"],
        ["Contribution to the S7 discrepancy", "most of it", "the 0.017 unit gap traces here"]] }
  ],
  options: [
    { k: "a", label: "Use the debit date NAV and correct on reconciliation", impact: "Keeps the tracker able to show a number immediately, and accepts that it is provisional until the statement arrives." },
    { k: "b", label: "Do not assign units until the statement confirms them", impact: "Never wrong, and the investor sees a pending instalment for one to two days every month." },
    { k: "c", label: "Estimate with the debit date NAV and label it provisional in the UI", impact: "Option a with the uncertainty made visible. Costs a UI state most designs do not have." },
    { k: "d", label: "Ingest the clearing date from the bank feed", impact: "Solves it at source if the feed exposes clearing, which for NACH it may not at the required granularity." }
  ],
  rec: "c",
  recCase: "Showing a provisional number beats both showing nothing and showing a confident wrong one. It is option a with one honest label added, and it sets up S7's reconciliation as an expected correction rather than a surprise."
},
{
  id: "S9", cat: "What nobody revisited", sub: "Identity", weight: "medium",
  q: "A fund merged into another one mid-book. I kept the old name and the old series. Is that one SIP or two?",
  lede: "The fund changed. The investor did not do anything.",
  now: "The tracker holds the pre-merger fund code and continues to append instalments to it. The chart shows one continuous line across the merger date.",
  why: "The merger was not in any feed the tracker reads. It only surfaced because the AMC statement started naming a different fund.",
  problem: "The continuous line implies a continuous track record. Before and after the merger these are different portfolios with different holdings and a different manager. The historical return shown for the merged entity is partly somebody else's.",
  evidence: [
    { type: "note", title: "What the chart currently claims",
      body: "One line, 18 months, one label. The merger sits at month 11 with no marker. A reader takes the whole line as the performance of the thing they currently hold, and roughly 60% of it is not." }
  ],
  options: [
    { k: "a", label: "Break the series at the merger and show two segments", impact: "Truthful. The chart looks discontinuous, which is what actually happened, and users will ask why." },
    { k: "b", label: "Keep one series and mark the merger date on the chart", impact: "Keeps continuity for the money, which did continue, while making the change visible." },
    { k: "c", label: "Keep it as is", impact: "Simplest, and the chart makes a claim about track record that is not true." }
  ],
  rec: "b",
  recCase: "The money genuinely was continuous, so breaking the series overstates the discontinuity from the investor's point of view. A marker on the date gives a reader everything they need to interpret the line correctly without pretending the holding restarted."
},
{
  id: "S10", cat: "What nobody revisited", sub: "Calendar", weight: "medium",
  q: "Which timezone is the fifth of the month? The server runs UTC and the investors are all IST.",
  lede: "A boring question that moves 1 in 30 instalments to the wrong day.",
  now: "Scheduling is evaluated in UTC. For a SIP dated the 1st, a UTC evaluation late on the previous day in IST terms can present a day early.",
  why: "The scheduler was written against UTC because the server is, and no timezone was ever specified for the SIP date itself.",
  problem: "It has not caused a visible failure in the demo book, because the debits happen mid-morning IST which is safely inside the same UTC day. It is one deployment region change away from breaking.",
  evidence: [
    { type: "note", title: "Why this is in the set despite zero incidents",
      body: "The question is here precisely because it has never failed. A rule that works by accident is indistinguishable from a rule that works, right up until the accident stops." }
  ],
  options: [
    { k: "a", label: "Pin all SIP scheduling to IST explicitly", impact: "Correct for this product, which is India only. One config change and a test." },
    { k: "b", label: "Store a timezone per investor", impact: "Correct for a product that might not stay India only. More schema than the current product needs." },
    { k: "c", label: "Leave it", impact: "Works today for reasons nobody wrote down." }
  ],
  rec: "a",
  recCase: "The product is India only and the mandate presentment is IST regardless of where the server runs. Pinning to IST makes the working behaviour intentional instead of accidental, which is the whole difference this question is about."
},
{
  id: "S11", cat: "Only you can answer", sub: "Product", weight: "high",
  q: "A stepped up SIP raised the monthly amount from 5,000 to 6,000. Is that the same SIP or a new one?",
  lede: "I have no basis to decide this. It is a product call.",
  now: "The tracker treats a step up as the same SIP with a changed amount. The SIP's start date, and therefore its age and its XIRR window, stays at the original date.",
  why: "Continuity was the simpler implementation and it matched how the mandate behaves, since the same mandate is amended rather than replaced.",
  problem: "It changes what age means. A three year old SIP that stepped up last month is reported as three years old, and most of the current monthly commitment is one month old. Whether that is right depends on what you want age to communicate.",
  evidence: [
    { type: "table", title: "The two readings",
      cols: ["", "same SIP", "new SIP"],
      rows: [
        ["Age shown", "3 years", "1 month"],
        ["XIRR window", "full history", "restarts"],
        ["Matches the bank mandate", "yes, amended", "no, would need a new one"],
        ["Matches investor intuition", "probably", "probably not"]] }
  ],
  options: [
    { k: "a", label: "Same SIP. Amount is a property that can change over time", impact: "Matches the mandate and the investor's mental model. Age keeps meaning time since started." },
    { k: "b", label: "New SIP on every step up, linked to the old one", impact: "Every commitment level gets its own clean track record. Investors accumulate a list of SIPs for what they think of as one thing." },
    { k: "c", label: "Same SIP, but show both the original start and the current amount since date", impact: "Both readings available. One more field on a screen that already has several." }
  ],
  rec: "a",
  recCase: "The mandate is amended, not replaced, so option a is the one that matches what actually happened at the bank. It is also what an investor means when they say how long they have been investing. Recording the step up date as an event covers the other reading without splitting the entity."
},
{
  id: "S12", cat: "Only you can answer", sub: "Scope", weight: "high",
  q: "What is this tracker not going to do? I have been building toward everything.",
  lede: "The absence of a boundary is why the question list keeps growing.",
  now: "There is no written scope. Every feature I have added seemed adjacent to the last one. The current build tracks instalments, units, valuation and returns, and has partial code for goal planning, tax reports and fund comparison, none of which anyone asked for.",
  why: "Adjacency is a very good reason to build something and a very bad reason to decide it belongs in the product.",
  problem: "Three half built features carry maintenance cost and appear in the codebase as though they are supported. Somebody reading the repo cannot tell what is a product and what is an experiment.",
  evidence: [
    { type: "stat", title: "What exists without having been asked for",
      items: [
        ["Goal planning", "partial", "UI only, no calculation"],
        ["Tax reports", "partial", "needs the S4 decision first"],
        ["Fund comparison", "partial", "reads a feed nobody pays for"]] }
  ],
  options: [
    { k: "a", label: "Tracking only. Delete the three partials", impact: "The smallest honest product. Deleting work already done feels bad and is usually correct." },
    { k: "b", label: "Tracking plus tax reports. Delete the other two", impact: "Tax is the one with a real user need behind it, and it is blocked on S4." },
    { k: "c", label: "Keep everything, mark them experimental in the UI", impact: "Nothing gets deleted and nothing gets finished. The most common outcome and the worst one." }
  ],
  rec: "b",
  recCase: "Tax reporting is the only one of the three that a user has asked about and the only one that follows from a decision already in this set. Goal planning and fund comparison are adjacent ideas without a stated need. Cutting them now costs three deletions; cutting them in six months costs three migrations."
}
];

/* ── FLOW ─────────────────────────────────────────────────────────────────
   The monthly cycle as a Kanban. Every step names the question that made it. */

window.LANES = {
  mandate: { name: "Mandate",   note: "the bank instruction" },
  order:   { name: "Order",     note: "placing the purchase" },
  units:   { name: "Units",     note: "what was actually allotted" },
  value:   { name: "Valuation", note: "what it is worth" },
  report:  { name: "Reporting", note: "what the investor sees" }
};

window.PHASES = [
{
  id: "pre", time: "T minus 2 days", title: "Pre-debit",
  sub: "Everything that has to be true before money moves",
  steps: [
    { id: "pre-resolve-date", lane: "mandate", t: "Resolve the instalment date", kind: "calc",
      d: "Take the SIP's nominal date, check it against the trading calendar in IST, and resolve the actual presentment date. Records BOTH the due month and the executed date so a rolled instalment still reports in the month it was due.",
      src: "S1(a) · S10(a)" },
    { id: "pre-check-mandate", lane: "mandate", t: "Check the mandate is alive", kind: "gate",
      d: "A mandate that has expired never reaches presentment. It routes straight to the paused path instead of generating a failure.",
      src: "S2(a) · S6(b)" },
    { id: "pre-notify", lane: "report", t: "Notify the investor", kind: "io",
      d: "Two days of warning so an underfunded account can be topped up before presentment rather than after a failure.",
      src: "S5(a)" }
  ]
},
{
  id: "debit", time: "Instalment date", title: "Debit",
  sub: "The only step that touches the investor's bank account",
  steps: [
    { id: "debit-present", lane: "mandate", t: "Present the mandate", kind: "io",
      d: "NACH presentment for the resolved amount. Returns success, or a failure with a bank reason code.",
      src: "S1(a)" },
    { id: "debit-classify", lane: "mandate", t: "Classify any failure", kind: "branch",
      d: "Failures split three ways and never share a status: failed-bank, failed-funds, mandate-expired. Each one drives different downstream behaviour.",
      src: "S2(a)" },
    { id: "debit-retry", lane: "mandate", t: "Retry, bank failures only", kind: "loop",
      d: "A single retry after 72 hours, and ONLY when the cause was bank side. An insufficient funds failure is never re-presented automatically, because a second presentment can trigger a second penalty on the investor.",
      src: "S5(a)" },
    { id: "debit-pause", lane: "mandate", t: "Pause after repeated investor-side failure", kind: "alarm",
      d: "Three consecutive investor-side failures pauses the SIP. Bank outages do not count toward the three, so a bad week at the bank cannot stop somebody investing.",
      src: "S6(b)" }
  ]
},
{
  id: "place", time: "Same day, before cut-off", title: "Order",
  sub: "Turning cleared money into a purchase",
  steps: [
    { id: "order-place", lane: "order", t: "Place the purchase order", kind: "io",
      d: "Submit to the AMC before the cut-off for that scheme. Missing the cut-off moves the applicable NAV to the next day.",
      src: "S8(c)" },
    { id: "order-provisional", lane: "units", t: "Assign provisional units", kind: "calc",
      d: "Compute units at the debit date NAV and mark them provisional. The investor sees a number immediately, labelled as not yet confirmed.",
      src: "S8(c)" },
    { id: "order-merger-check", lane: "order", t: "Check the scheme still exists", kind: "gate",
      d: "A merged or renamed scheme is detected here. The series continues under the same SIP with a merger event recorded on the date, so the chart can mark it.",
      src: "S9(b)" }
  ]
},
{
  id: "allot", time: "T plus 1 to T plus 2", title: "Allotment",
  sub: "What the AMC says actually happened",
  steps: [
    { id: "allot-ingest", lane: "units", t: "Ingest the AMC statement", kind: "io",
      d: "Pull the allotment record. This is the first point at which the true NAV and the true unit count are known.",
      src: "S7(a)" },
    { id: "allot-reconcile", lane: "units", t: "Reconcile to the AMC", kind: "hard",
      d: "The AMC register is authoritative. Where our provisional units differ, ours are corrected to match, and the correction is recorded rather than silently applied.",
      src: "S7(a)" },
    { id: "allot-confirm", lane: "units", t: "Clear the provisional flag", kind: "calc",
      d: "Units move from provisional to confirmed. Anything still provisional after 3 working days raises an alarm.",
      src: "S8(c)" }
  ]
},
{
  id: "value", time: "Every trading day", title: "Valuation",
  sub: "Marking the book",
  steps: [
    { id: "value-nav", lane: "value", t: "Pull closing NAV", kind: "io",
      d: "One NAV per scheme per trading day. A missing NAV holds the previous value and flags the gap rather than interpolating.",
      src: "S8(c)" },
    { id: "value-xirr", lane: "value", t: "Compute XIRR on the cashflow series", kind: "calc",
      d: "XIRR over every dated cashflow. Absolute and CAGR are computed alongside it but are not the headline.",
      src: "S3(a)" },
    { id: "value-net", lane: "value", t: "Compute a redeem-today estimate", kind: "calc",
      d: "Applies exit load per lot by holding period. Computed daily, surfaced only on the redemption screen, never as the dashboard headline.",
      src: "S4(a)" }
  ]
},
{
  id: "report", time: "Month end", title: "Reporting",
  sub: "What the investor and the adviser actually read",
  steps: [
    { id: "report-monthly", lane: "report", t: "Build the monthly statement", kind: "calc",
      d: "Counts instalments by DUE month, not executed date, so a rolled instalment reports in the month it belonged to.",
      src: "S1(a)" },
    { id: "report-headline", lane: "report", t: "Render the headline return", kind: "calc",
      d: "XIRR leads. Absolute and CAGR sit behind a tap. No method is hidden, and one is chosen.",
      src: "S3(a)" },
    { id: "report-discrepancy", lane: "report", t: "Show unresolved discrepancies", kind: "alarm",
      d: "Any unit difference against the AMC that survived reconciliation is listed with its size and age. An empty list is stated as empty rather than omitted.",
      src: "S7(a)" },
    { id: "report-scope", lane: "report", t: "Nothing else ships", kind: "gate",
      d: "Goal planning and fund comparison are out of scope and their partial code is removed. Tax reporting is in scope and blocked until the S4 decision is implemented.",
      src: "S12(b)" }
  ]
}
];

window.DETAIL = {
"pre-resolve-date": {
  impact: "Decides whether a year has twelve instalments or eleven, and whether the monthly report can be trusted.",
  proc: ["Read the SIP nominal date and the investor timezone, which is IST for every investor.",
         "Check the date against the NSE trading calendar for that year.",
         "If it is not a trading day, roll forward to the next one.",
         "Write BOTH fields: due_month stays the original month, executed_date carries the roll."],
  cases: ["Roll stays inside the month -> nothing downstream changes.",
          "Roll crosses a month boundary -> due_month still reports the original month, which is the whole point of carrying two fields.",
          "Two holidays back to back -> rolls twice, still one instalment.",
          "SIP date is the 29th, 30th or 31st in a short month -> clamps to the last day, then applies the holiday roll."],
  fail: ["Trading calendar unavailable -> do NOT guess. Hold the instalment and alarm, because guessing a date moves money on a day nobody chose.",
         "Timezone config missing -> refuse to schedule rather than defaulting to UTC, which is the S10 failure."],
  links: ["debit-present", "report-monthly"]
},
"pre-check-mandate": {
  impact: "Stops the system generating a failure it already knows is coming.",
  proc: ["Read mandate validity and remaining balance authorisation.",
         "If expired, route to the paused path and notify, without presenting.",
         "If valid, continue to presentment."],
  cases: ["Expiring within 30 days -> present normally and warn the investor to renew.",
          "Amended mandate from a step up -> same mandate, new amount, same SIP identity."],
  fail: ["Mandate status unreadable -> treat as valid and present. A false failure is worse than an extra presentment attempt here."],
  links: ["debit-classify", "debit-pause"]
},
"pre-notify": {
  impact: "The cheapest possible failure prevention: two days of warning.",
  proc: ["Two working days before presentment, notify the investor with the amount and the date.",
         "Include the current mandate status if it is expiring."],
  cases: ["Investor has notifications off -> still send for money-moving events. This is not marketing.",
          "Multiple SIPs on the same date -> one notification, not four."],
  fail: ["Notification service down -> log and continue. A missed warning must never block a presentment."],
  links: ["debit-present"]
},
"debit-present": {
  impact: "The only irreversible step. Money leaves the investor's account here.",
  proc: ["Submit the NACH presentment for the resolved amount on the resolved date.",
         "Record the presentment id and timestamp before waiting for a response.",
         "On response, record success or the bank reason code verbatim."],
  cases: ["Partial debit -> not possible under NACH, treat any partial as a failure and escalate.",
          "Duplicate presentment id returned -> do not re-present under any circumstance. Investigate manually."],
  fail: ["No response within the window -> mark as unknown, NOT as failed. An unknown that is later confirmed successful is recoverable; a false failure that triggers a retry can double debit.",
         "Bank returns an unmapped reason code -> classify as failed-bank and flag the code for mapping, because the safe default is the one that does not blame the investor."],
  links: ["debit-classify", "order-place"]
},
"debit-classify": {
  impact: "One status could not drive three behaviours. This is where the three separate.",
  proc: ["Map the bank reason code to one of three statuses.",
         "failed-bank: the bank or the network. failed-funds: the investor's balance. mandate-expired: structural.",
         "Write the status and keep the raw reason code alongside it."],
  cases: ["Unmapped code -> failed-bank, and raise a mapping task. The default must not accuse the investor.",
          "Code indicates a frozen account -> mandate-expired path, since presentment will keep failing until a human acts."],
  fail: ["Mapping table missing -> everything becomes failed-bank and retries once. Conservative in the direction that does not penalise the investor."],
  links: ["debit-retry", "debit-pause", "report-discrepancy"]
},
"debit-retry": {
  impact: "Recovered 5 of 7 failures in the demo book, and is the step most capable of causing harm.",
  proc: ["Only failed-bank is eligible. Everything else exits here.",
         "Wait 72 hours, then present once.",
         "Never retry a retry. One attempt, then stop and notify."],
  cases: ["Retry succeeds -> instalment completes, units assigned at the retry date NAV, not the original.",
          "Retry fails -> stop, notify, and count it toward nothing. A bank failure never contributes to the pause rule.",
          "Original cause was insufficient funds -> no retry at all. Notify and let the investor decide."],
  fail: ["Retry scheduler down -> the instalment stays failed rather than retrying late. A retry 8 days later is a surprise debit."],
  links: ["debit-pause", "order-place"]
},
"debit-pause": {
  impact: "A pause stops somebody investing. It has to be right.",
  proc: ["Count consecutive INVESTOR-SIDE failures only.",
         "At three, set the SIP to paused and notify with the reason and the fix.",
         "Bank side failures reset nothing and count toward nothing."],
  cases: ["Three bank outages in a row -> no pause. This is the false positive the rule was redesigned to avoid.",
          "Mandate expired -> pause immediately, do not wait for three.",
          "Investor tops up and the next debit succeeds -> counter resets to zero."],
  fail: ["Counter state lost -> start from zero rather than pausing. Failing open is correct for a rule that stops investment."],
  links: ["pre-check-mandate"]
},
"order-place": {
  impact: "Missing the cut-off silently changes which day's NAV applies.",
  proc: ["Submit the purchase to the AMC with the cleared amount.",
         "Record the submission timestamp against the scheme's published cut-off.",
         "If submitted after cut-off, record that the next day's NAV will apply."],
  cases: ["Submitted within 30 minutes of cut-off -> flag as at-risk so a late allotment is expected rather than surprising.",
          "Scheme suspended for subscription -> hold the money, notify, do not silently pick another fund."],
  fail: ["AMC gateway down -> hold and retry within the same day if the cut-off allows, otherwise roll to the next day and tell the investor which NAV applied."],
  links: ["order-provisional", "allot-ingest"]
},
"order-provisional": {
  impact: "Lets the investor see a number the same day, without pretending it is final.",
  proc: ["Units = amount / NAV published for the debit date.",
         "Mark provisional = true.",
         "Render with the provisional label everywhere the number appears."],
  cases: ["NAV for the debit date not yet published -> show the instalment as pending with no unit figure, rather than using a stale NAV.",
          "Clearing slips to the next day -> the provisional figure is expected to be wrong, and reconciliation corrects it."],
  fail: ["Cannot compute -> show pending. Never show an unlabelled estimate."],
  links: ["allot-reconcile", "allot-confirm"]
},
"order-merger-check": {
  impact: "Stops the chart claiming a track record that belongs to a different portfolio.",
  proc: ["Compare the scheme code on the statement against the one held.",
         "On mismatch, resolve whether it is a rename or a merger.",
         "Record a merger event on the date. Do not split the SIP."],
  cases: ["Rename only, same portfolio -> record and carry on, no chart marker needed.",
          "True merger into a different scheme -> chart marker on the date, series continues, and the pre-merger segment is labelled as the predecessor."],
  fail: ["Cannot resolve -> hold reconciliation for that scheme and flag. Do not guess which fund the units belong to."],
  links: ["allot-ingest", "report-headline"]
},
"allot-ingest": {
  impact: "The first moment the true unit count is knowable.",
  proc: ["Fetch the allotment record for the instalment.",
         "Extract allotted units, applied NAV, and the allotment date.",
         "Store the AMC figures unmodified, alongside ours rather than over them."],
  cases: ["Statement arrives late -> instalment stays provisional and ages. Past 3 working days it alarms.",
          "Statement covers multiple instalments -> match on amount and date, never on amount alone."],
  fail: ["Statement unparseable -> keep provisional, alarm, and never discard the raw file."],
  links: ["allot-reconcile"]
},
"allot-reconcile": {
  impact: "This is where the tracker stops being able to be confidently wrong at redemption.",
  proc: ["Compare our provisional units to the AMC allotted units.",
         "Where they differ, the AMC figure wins and ours is corrected.",
         "Write a correction record with both values and the difference. Never overwrite silently."],
  cases: ["Difference under 0.001 units -> still corrected, still recorded. Small is not zero.",
          "Difference large enough to suggest a wrong instalment matched -> do not correct, alarm instead.",
          "AMC figure missing -> stay provisional, do not fall back to ours as if confirmed."],
  fail: ["Reconciliation job does not run -> units stay provisional and the alarm at day 3 catches it. Failing to reconcile is visible; reconciling wrongly is not."],
  links: ["allot-confirm", "report-discrepancy"]
},
"allot-confirm": {
  impact: "The point after which a redemption can be trusted.",
  proc: ["Clear provisional on units that reconciled cleanly.",
         "Stamp the confirmation timestamp.",
         "Anything still provisional after 3 working days raises an alarm with its age."],
  cases: ["Confirmed then later amended by the AMC -> treat as a new correction, keep both records."],
  fail: ["Alarm has no watcher -> the alarm is worthless. It reports to the same channel as the debit alarms and is checked daily."],
  links: ["value-nav", "report-discrepancy"]
},
"value-nav": {
  impact: "Every number the investor sees is downstream of this one.",
  proc: ["Pull closing NAV for every held scheme, once per trading day.",
         "Store per scheme per date. Never overwrite a published NAV."],
  cases: ["NAV not published by evening -> hold the previous value and flag the gap on the chart.",
          "NAV revised by the AMC -> store the revision as a new record, recompute affected valuations, and keep the original."],
  fail: ["Feed down -> hold and flag. Never interpolate a NAV, because an interpolated value is indistinguishable from a real one once stored."],
  links: ["value-xirr", "value-net"]
},
"value-xirr": {
  impact: "The headline number. Chosen deliberately over two alternatives that read higher.",
  proc: ["Assemble every dated cashflow: each instalment negative, current value positive.",
         "Solve XIRR.",
         "Compute absolute and CAGR alongside, store all three, surface XIRR."],
  cases: ["Under 6 months of history -> XIRR is unstable and is shown with a caution rather than suppressed.",
          "All instalments in the same month -> XIRR approaches absolute return, which is correct and worth labelling."],
  fail: ["XIRR does not converge -> show absolute with an explicit note on why, never fall back silently to a different method."],
  links: ["report-headline"]
},
"value-net": {
  impact: "The only number that answers should I redeem today.",
  proc: ["For each lot, determine holding period from its allotment date.",
         "Apply the scheme's exit load schedule to lots still inside the load window.",
         "Sum to a redeem-today estimate. Do not model tax."],
  cases: ["All lots past the exit load window -> net equals gross, and it says so rather than hiding the row.",
          "Partial redemption -> apply FIFO by allotment date, which is what the AMC does."],
  fail: ["Exit load schedule unknown for a scheme -> show gross and state that load could not be applied. Never assume zero load."],
  links: ["report-headline"]
},
"report-monthly": {
  impact: "The report that makes a rolled instalment look like a skipped month, or not.",
  proc: ["Group instalments by due_month, never by executed_date.",
         "Show executed dates within each month so a roll is visible.",
         "Count failures by their classified cause, not as one total."],
  cases: ["Month with a rolled-in instalment -> reports in its due month, with the executed date shown.",
          "Month with zero instalments because the SIP was paused -> states paused, not missed."],
  fail: ["due_month missing on legacy rows -> fall back to executed_date and mark those rows as approximate."],
  links: ["report-headline"]
},
"report-headline": {
  impact: "One number gets quoted, compared and acted on. This picks which one.",
  proc: ["Render XIRR as the headline.",
         "Absolute and CAGR available on tap, with a one line explanation of each.",
         "Never show a return without the as-of date."],
  cases: ["Provisional units in the book -> headline still renders, with a note that some units are unconfirmed.",
          "A merger in the series -> chart carries the marker from order-merger-check."],
  fail: ["Valuation stale by more than one trading day -> show the last good figure with its date, prominently, rather than a fresh looking wrong one."],
  links: ["report-discrepancy"]
},
"report-discrepancy": {
  impact: "The list that makes reconciliation failures impossible to ignore.",
  proc: ["List every unresolved unit difference with its size, scheme and age.",
         "State the empty case explicitly as zero discrepancies, never omit the section."],
  cases: ["Zero discrepancies -> the section renders and says zero of N instalments. A silent section and a clean book must not look identical."],
  fail: ["Cannot compute -> say so. An absent list must never be readable as a clean one."],
  links: ["allot-reconcile"]
},
"report-scope": {
  impact: "The boundary that stops the question list growing forever.",
  proc: ["Goal planning and fund comparison code removed, not hidden.",
         "Tax reporting kept, marked blocked on S4.",
         "Anything not in tracking, valuation or reporting needs a new decision before it is built."],
  cases: ["A request arrives for something out of scope -> it becomes a question in the next decision set, not a branch."],
  fail: ["Scope drifts anyway -> the flow diagram stops matching the code, which is the signal to run the questions again."],
  links: []
}
};
