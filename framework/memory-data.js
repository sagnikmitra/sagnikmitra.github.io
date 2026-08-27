/* Measured on this machine on 2026-08-27. Summary BODIES are deliberately excluded:
   they contain private client and project detail. Only sizes, dates and counts ship. */
const MEM = {
 "measured_on": "2026-08-27",
 "machine": "one laptop, one developer, Claude Code",
 "transcript_files": 29221,
 "summaries_total": 223,
 "sessions_with_compaction": 48,
 "ladder_session": "786f192e",
 "ladder": [
  {
   "ts": "2026-07-14",
   "chars": 12276,
   "tok": 3069,
   "lines": 69
  },
  {
   "ts": "2026-07-15",
   "chars": 29121,
   "tok": 7280,
   "lines": 139
  },
  {
   "ts": "2026-07-16",
   "chars": 13143,
   "tok": 3285,
   "lines": 71
  },
  {
   "ts": "2026-07-16",
   "chars": 11117,
   "tok": 2779,
   "lines": 46
  },
  {
   "ts": "2026-07-17",
   "chars": 13864,
   "tok": 3466,
   "lines": 58
  },
  {
   "ts": "2026-07-21",
   "chars": 22195,
   "tok": 5548,
   "lines": 155
  },
  {
   "ts": "2026-07-22",
   "chars": 23908,
   "tok": 5977,
   "lines": 191
  },
  {
   "ts": "2026-07-22",
   "chars": 23920,
   "tok": 5980,
   "lines": 141
  },
  {
   "ts": "2026-07-22",
   "chars": 26958,
   "tok": 6739,
   "lines": 237
  },
  {
   "ts": "2026-07-23",
   "chars": 20086,
   "tok": 5021,
   "lines": 151
  },
  {
   "ts": "2026-07-24",
   "chars": 15926,
   "tok": 3981,
   "lines": 67
  },
  {
   "ts": "2026-07-29",
   "chars": 16202,
   "tok": 4050,
   "lines": 79
  },
  {
   "ts": "2026-08-04",
   "chars": 19183,
   "tok": 4795,
   "lines": 115
  },
  {
   "ts": "2026-08-05",
   "chars": 48500,
   "tok": 12125,
   "lines": 589
  },
  {
   "ts": "2026-08-15",
   "chars": 14989,
   "tok": 3747,
   "lines": 108
  },
  {
   "ts": "2026-08-22",
   "chars": 15437,
   "tok": 3859,
   "lines": 106
  },
  {
   "ts": "2026-08-26",
   "chars": 21809,
   "tok": 5452,
   "lines": 192
  },
  {
   "ts": "2026-08-26",
   "chars": 21209,
   "tok": 5302,
   "lines": 195
  }
 ],
 "dist_top": [
  {
   "id": "786f192e",
   "n": 18,
   "recs": 68653,
   "mb": 330.9
  },
  {
   "id": "8dae8420",
   "n": 15,
   "recs": 56121,
   "mb": 266.4
  },
  {
   "id": "88eff359",
   "n": 15,
   "recs": 56508,
   "mb": 260.4
  },
  {
   "id": "cb507eaa",
   "n": 15,
   "recs": 56759,
   "mb": 262.3
  },
  {
   "id": "94d0db72",
   "n": 14,
   "recs": 54065,
   "mb": 248.1
  },
  {
   "id": "84fdfa66",
   "n": 12,
   "recs": 45872,
   "mb": 213.9
  },
  {
   "id": "a0818c30",
   "n": 9,
   "recs": 26558,
   "mb": 76.8
  },
  {
   "id": "91c6bdf2",
   "n": 9,
   "recs": 30020,
   "mb": 73.0
  },
  {
   "id": "bc6d6dfc",
   "n": 8,
   "recs": 24230,
   "mb": 176.9
  },
  {
   "id": "22c96073",
   "n": 8,
   "recs": 25474,
   "mb": 142.3
  },
  {
   "id": "53b3d551",
   "n": 8,
   "recs": 23628,
   "mb": 73.3
  },
  {
   "id": "12284bef",
   "n": 7,
   "recs": 22594,
   "mb": 57.9
  },
  {
   "id": "78cb36e3",
   "n": 7,
   "recs": 7016,
   "mb": 23.8
  },
  {
   "id": "ab3bd14a",
   "n": 6,
   "recs": 11670,
   "mb": 58.7
  },
  {
   "id": "bd102865",
   "n": 6,
   "recs": 23253,
   "mb": 113.4
  }
 ],
 "cap": 220
};
MEM.anchors = {
 "rows": [
  {
   "k": "File paths",
   "d": "absolute paths the session actually touched",
   "pre": 3527,
   "kept": 284,
   "pct": 8.05
  },
  {
   "k": "Commit hashes",
   "d": "strings naming one exact repository state",
   "pre": 5365,
   "kept": 545,
   "pct": 10.16
  },
  {
   "k": "Large numbers",
   "d": "counts, sizes, measurements",
   "pre": 9806,
   "kept": 780,
   "pct": 7.95
  },
  {
   "k": "Ordinary prose",
   "d": "the narrative wrapped around all of it",
   "pre": null,
   "kept": null,
   "pct": 14.9
  }
 ],
 "thresholds": [
  {
   "t": 1,
   "n": 201,
   "path": 8.05,
   "text": 14.9,
   "zero": 74
  },
  {
   "t": 5,
   "n": 140,
   "path": 6.83,
   "text": 12.0,
   "zero": 42
  },
  {
   "t": 10,
   "n": 108,
   "path": 6.23,
   "text": 9.44,
   "zero": 31
  },
  {
   "t": 20,
   "n": 53,
   "path": 4.23,
   "text": 6.76,
   "zero": 15
  }
 ],
 "pooled_text_retention": 10.75,
 "clean_boundaries": 214,
 "excluded_artifacts": 9,
 "range": [
  2.06,
  89.47
 ]
};
MEM.atlas = [
 {
  "name": "NoLiMa",
  "what": "Rebuilds the NIAH needle set so questions and needles have MINIMAL LEXICAL OVERLAP, forcing the model to infer a latent semantic association to locate the needle instead of...",
  "ev": "strong",
  "build": "no",
  "why": "The best single citation for WHY a harness should retrieve or compact rather than dump: degradation at 32K is severe precisely when the needed information is NOT lexically similar to the query, which is the normal case in a code session, where the user asks about a symptom and the relevant fact was recorded as a cause. <b>Caveat:</b> Still synthetic and still needle-shaped, so HELMET's proxy critique partially applies, though far less than to vanilla NIAH, since removing the shortcut is the entire point. 'Below 50% of baseline' is a relative measure whose severity depends on the baseline being near-ceiling (it is, ~99%).",
  "src": [
   "arXiv 2502.05167, ICML 2025 poster, official repo github.com/adobe-research/NoLiMa (Adobe Research), peer-reviewed venue, 13 LLMs all claiming at least 128K context. At 32K, ELEVEN OF THE THIRTEEN drop below 50% of their own strong short-context (<1K) baselines."
  ]
 },
 {
  "name": "Observation masking",
  "what": "Rather than summarizing, mask the output of old tool calls while leaving the fact-of-the-call and its arguments in place.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Cheapest possible implementation, a harness-side filter over stored tool results, zero model calls, and it is the only technique in either lens with independent non-vendor evidence of net token benefit at no measured quality cost. Reasonable default, with LLM summarization as an escalation rather than the first move. <b>Caveat:</b> The verifier's strongest independent study argues for masking PLUS summarization, not masking INSTEAD OF summarization, the hybrid beat both arms by 7-11%.",
  "src": [
   "The strongest independent (non-vendor) evidence in either lens, but the verifier materially reframed it. CONFIRMED by the verifier against the abstract of arXiv:2605.18854, 'Evaluating Memory Condensation Strategies for Coding Agents in Data-Driven Scientific..."
  ]
 },
 {
  "name": "Configurable heuristic condensers with explicit knob",
  "what": "OpenHands exposes condensation as parameters rather than a black box: `keep_first` (always preserve N initial events), `max_size` (event count that triggers condensation), `max_events`...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Directly copyable as a config schema, and the four-knob decomposition is a better mental model than a single 'compact threshold'. `keep_first` in particular encodes 'never lose the original ask', a distinct defect class from generic over-compression. <b>Caveat:</b> Exposing knobs is not knowing good values; no retrieved source gives tuned defaults per task type. arXiv:2605.18854 states the optimal condenser varies by domain and task length, which means any single global setting is wrong somewhere.",
  "src": [
   "OpenHands SDK docs plus the OpenHands SDK arXiv paper (arXiv:2511.03690, preprint, 2025), which documents the condenser abstraction as a first-class parameterized component."
  ]
 },
 {
  "name": "Progressive disclosure: metadata → body → referenced",
  "what": "Three explicit stages. At startup only lightweight discovery metadata is in context, principally each skill's name and description.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "The single cheapest structural saving available to any harness with a large catalog: pay for descriptions, not bodies, until invocation. It is the difference between a catalog that costs tokens on every turn and one that costs almost nothing until it fires. <b>Caveat:</b> Discovery quality is entirely a function of description text, and NO retrieved evidence measures how often correct-skill selection actually happens, a skill that never fires costs nothing and delivers nothing.",
  "src": [
   "Mechanism from Anthropic's Agent Skills docs and engineering post (vendor primary). Independent ADOPTION data from arXiv:2602.14690, 'Harness Engineering for Agentic AI Coding Tools: An Exploratory Study' (preprint, 2026), which mined 2,853 GitHub repositories across..."
  ]
 },
 {
  "name": "Stable byte-identical prompt prefix + append-only co",
  "what": "Covered by BOTH lenses. Manus names KV-cache hit rate the single most important production metric and derives mechanical rules: never mutate earlier turns (append-only), keep the...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Pure prompt hygiene, free, and independent of any beta: never put a clock, a git SHA, a session id, or a randomly-ordered tool list above a cache breakpoint; freeze tool-definition serialization order; keep the stable substrate (system prompt, instruction file, tool defs) contiguous at the top and volatile session state below it. <b>Caveat:</b> This is a cost and latency optimization, NOT a quality one, nothing here claims better answers. Append-only directly conflicts with context editing and tool-result clearing, which by definition mutate history; the two trade against each other and no retrieved source quantifies that tradeoff.",
  "src": [
   "Anthropic prompt-caching docs and the tool-use-with-prompt-caching page, plus multiple practitioner writeups independently restating the hierarchy and the invalidators."
  ]
 },
 {
  "name": "The prompt-caching × context-rewriting interaction: ",
  "what": "Caching keys on an EXACT prefix match of the KV state. Every context-management technique, clear_tool_uses, clear_thinking, compaction, and any harness-side transcript rewrite, works...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "The single most decision-relevant fact in either lens for a local harness, and free to act on: whatever prunes the transcript should prune RARELY and IN BULK, from the oldest end, and never touch anything above the stable prefix. <b>Caveat:</b> Lens 04 retrieved only abstract-level findings of 2601.06007, the 41-80% and 13-31% ranges are wide and it did not see the per-provider breakdown or the attribution of savings.",
  "src": [
   "Anthropic's docs state that clearing invalidates the affected cache prefix and explicitly frame clear_at_least as the mitigation."
  ]
 },
 {
  "name": "Generative Agents",
  "what": "An append-only, timestamped memory stream of natural-language observations. Retrieval scores every record by a weighted sum of three normalized signals: recency (exponential decay...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "The three-signal scoring function is roughly 20 lines over files a harness already writes, needs no new store, and directly addresses the real problem of which of many markdown cards to surface at session start. The recency decay being on LAST ACCESS (not creation) naturally keeps live-but-old rules alive. <b>Caveat:</b> The task is believable social simulation, not factual accuracy, the ablation measures human believability ratings, which does not transfer to 'did the agent retrieve the correct fact'. Importance scoring is an unvalidated LLM judgment and is known to be poorly calibrated. Cost scales with stream length.",
  "src": [
   "Peer-reviewed at UIST 2023 with a component ablation, removing observation, planning, or reflection each degraded believability ratings."
  ]
 },
 {
  "name": "Verbatim chunks over extracted artifacts",
  "what": "A controlled ablation that holds model, retriever, reranker and judge constant and swaps ONLY the stored representation: LLM-extracted typed artifacts (facts/decisions/events, what...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "It is the cleanest directly-relevant negative result against 'distill history into structured memory as a REPLACEMENT'. The actionable form: never delete the raw transcript; treat cards as an INDEX over it, not a substitute. <b>Caveat:</b> One preprint, one extraction design, not peer-reviewed, no replication, the result is 'for the extraction designs tested', and a better extractor could close the gap.",
  "src": [
   "COVERED BY BOTH LENSES, and the verifier confirmed the core result and re-derived the arithmetic. arXiv 2601.00821: LoCoMo 43.9% vs 28.0% = 15.9pp; LongMemEval-S 67.4% vs 45.4% = 22.0pp, both differences reproduce exactly from the retrieved percentages, so nothing was..."
  ]
 },
 {
  "name": "Constraint pinning",
  "what": "Identify the in-context governance constraints (standing instructions, runtime policies, safety rules, memory entries) and exempt them from compaction entirely, re-emit them verbatim...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Roughly 47 tokens buys back a 0%→30% (up to 59%) violation regression against incidental compaction loss. For any harness carrying a large standing rule set in context, the failure mode, an agent post-compaction no longer knowing a destructive-op rule exists, is precisely the worst case. <b>Caveat:</b> VERIFIER CORRECTION TO THE STATED LIMIT: both lenses said pinning is beaten by the paper's optimized Compaction-Eviction Attack, that inference is WRONG in its mechanism.",
  "src": [
   "Introduced as a defense in 'Governance Decay' (arXiv 2606.22528, submitted 2026-06-21, now v2) alongside the author-built ConstraintRot benchmark with deterministic violation grading."
  ]
 },
 {
  "name": "Prompt-cache-aware compaction policy",
  "what": "Because prompt caching is keyed on an exact prefix, mutating position N invalidates everything from N onward, so every context-management edit forces a cache re-write of the affected...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "It is the one cost-side constraint that shapes every other compaction choice: an eviction strategy that fires continuously and incrementally is economically worse than one that fires rarely and sheds a lot, regardless of which is semantically better. <b>Caveat:</b> arXiv 2601.06007 measures CACHING, not context-editing efficacy, it is evidence for the cache economics and is NOT evidence for or against Anthropic's 84/29/39 figures; nobody should present it as validating them. It is a preprint, not peer-reviewed.",
  "src": [
   "VERIFIER-CORRECTED. Confirmed from vendor docs: tool-result clearing invalidates cached prefixes; `clear_at_least` exists and its documented purpose is to 'ensure a minimum number of tokens is cleared each time to make cache invalidation worthwhile', close to a vendor..."
  ]
 },
 {
  "name": "Recursive summarization",
  "what": "The model summarizes a short span, then recursively produces new memory by combining the PREVIOUS memory with the new span, regenerating the whole memory each time.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "It is the canonical formulation of the holistic-regeneration side of the compaction design space, and the only peer-reviewed anchor either lens found for any summarization strategy. <b>Caveat:</b> Long-dialogue chat, not tool-using agents, no file paths, no code, no verifiable artifacts in the domain. And holistic regeneration is PRECISELY the operation the drift literature identifies as the driver of cumulative erosion: each regeneration re-encodes everything.",
  "src": [
   "The ONLY peer-reviewed item in lens 2: published in Neurocomputing (Elsevier) / ACM DL, arXiv 2308.15022, evaluated on a public long-dialogue dataset against memory baselines. Reported: 36.3% improvement over MemoryBank, the most competitive baseline."
  ]
 },
 {
  "name": "Experience-following: error propagation and misalign",
  "what": "LLM agents exhibit an experience-following property, when a new task input resembles the input stored in a retrieved record, the output closely tracks that record's output.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "This is the failure mode of a harness that mines its own transcripts and its own compaction summaries: the agent reads its own prior conclusions as evidence, so a wrong fact in a card becomes ground truth for every later session and gets re-summarized into ever-more-confident form. <b>Caveat:</b> Peer-reviewed but only the abstract-level claim was available. The proposed remedy (downstream task outcomes as quality labels) presumes an outcome signal exists, which for open-ended dev sessions usually does not.",
  "src": [
   "Xiong et al., 'How Memory Management Impacts LLM Agents: An Empirical Study of Experience-Following Behavior', ACL 2026 Long Papers (aclanthology.org/2026.acl-long.27), arXiv:2505.16067, peer-reviewed, controlled experiments over memory addition and deletion..."
  ]
 },
 {
  "name": "Multi-agent context fragmentation",
  "what": "Subagents cannot see each other's traces, so each makes implicit decisions the others do not know about, and the coordinator must merge artifacts built on incompatible premises.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Applies whenever work is fanned out to subagents that return compressed summaries, including a research sweep like this one, where each lens agent sees only its own slice. <b>Caveat:</b> MAST's percentages describe the distribution of failures AMONG TRACES THAT FAILED, in 2025-era frameworks, not a probability that a multi-agent design fails, and there is no single-agent control arm.",
  "src": [
   "Cemri, Pan, Yang et al., 'Why Do Multi-Agent LLM Systems Fail?', arXiv:2503.13657, NeurIPS 2025 poster, taxonomy built from 150 traces with inter-annotator kappa 0.88, then applied over 1,600+ annotated traces across 7 multi-agent frameworks, yielding 14 failure modes."
  ]
 },
 {
  "name": "Privacy and credential leakage through persisted mem",
  "what": "Memory accumulates whatever passed through the session, secrets pasted into a prompt, printed by a tool, or embedded in an error message, and then makes it retrievable.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Transcript mining is a harness's core mechanism and transcripts are exactly where tokens, connection strings and env dumps land. Mitigation is entirely harness-side and unglamorous: redact at WRITE time with a token-shaped-string filter on the collector, never at read time; and treat any memory file committed to git as public. <b>Caveat:</b> MEXTRA's threat model assumes an adversary who can query the agent, for a single-dev local harness with no shared memory and no untrusted queriers, the extraction vector is largely absent.",
  "src": [
   "Wang et al., 'Unveiling Privacy Risks in LLM Agent Memory', ACL 2025 Long Papers (aclanthology.org/2025.acl-long.1227), arXiv:2502.13172, peer-reviewed, introduces MEXTRA; NO extraction-success rates retrieved."
  ]
 },
 {
  "name": "Selective context / structural pruning",
  "what": "Score self-information or attention/relevance per lexical unit (token, phrase, sentence) and drop the lowest-scoring units, keeping surviving text as the prompt.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Not as a shipped compressor but as the MANDATORY cheap baseline. Any compression proposal must first be shown to beat 'drop the oldest N tool results' and 'random sentence deletion' on the harness's own data before it earns a dependency. <b>Caveat:</b> Same format-destruction problem on structured content as the rest of the deletion family.",
  "src": [
   "Used repeatedly as the baseline in the LLMLingua line. Load-bearing comparative datapoint: a practitioner replication reports random sentence selection at 2x BEAT LLMLingua in 2 of the first-two-dataset cases."
  ]
 },
 {
  "name": "MemDelta",
  "what": "A protocol, not a benchmark: it re-runs LongMemEval-S varying exactly ONE component at a time across three model families, isolating four sources of hidden variation published...",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "Costs nothing to adopt because it is an evaluation DISCIPLINE, not a system: vary one component, report the non-architectural deltas alongside the architectural one. The Mem0 ranking flip is the strongest single piece of evidence in either lens because the flip is DEMONSTRATED, not asserted. <b>Caveat:</b> Preprint; single benchmark, so confound magnitudes are themselves benchmark-specific; p-values on a 500-item single-benchmark comparison should not be over-read.",
  "src": [
   "arXiv 2606.29914 (June 2026), preprint, single team, n=500 questions on LongMemEval-S, three model families. The verifier calls it the highest-trust source in lens 06's sweep, methodology-only, no product to flatter, and confirmed every number verbatim: verbatim RAG..."
  ]
 },
 {
  "name": "Lost in the Middle",
  "what": "Holds the content of the context constant and moves the POSITION of the relevant document, across multi-document QA and key-value retrieval.",
  "ev": "moderate",
  "build": "yes_this_week",
  "why": "A position-permutation probe is the CHEAPEST measurement in either lens, hold the session card constant, move the critical fact, measure. A harness controls the ORDER of what it injects, so this is one of very few findings it can act on directly: put load-bearing constraints at the edges, not buried mid-card. <b>Caveat:</b> The mechanism and the length-dependence are both CONTESTED. (a) A retrieved summary states research using different LLMs has NOT consistently found the effect.",
  "src": [
   "Liu, Lin, Hewitt, Paranjape, Bevilacqua, Petroni, Liang, TACL 2024, arXiv 2307.03172; the most-replicated result in lens 06, with a practitioner-grade independent replication (the LessWrong 'Lost in the Middle Replicates' post)."
  ]
 },
 {
  "name": "Sub-agent context isolation",
  "what": "A subagent runs in its own context window, absorbs the expensive reads (file dumps, search output, log trawls), and returns only a result plus small metadata to the parent, so the...",
  "ev": "vendor_claim_only",
  "build": "yes_this_week",
  "why": "The measurable, mechanism-level win is keeping large tool outputs out of the parent's window, that part needs no evaluation to believe, because it is arithmetic. <b>Caveat:</b> Cognition's widely-cited counter-argument is that parallel subagents making implicit decisions on a shared creative target produce incoherent output: isolation helps for READ-heavy fan-out and hurts for WRITE-heavy fan-out.",
  "src": [
   "Covered by BOTH lenses. Claude Code docs describe subagents as separate instances with their own context windows. Anthropic's context-engineering post claims isolated-context multi-agent outperformed single-agent on their internal research task, Anthropic evaluating..."
  ]
 },
 {
  "name": "File-based cross-session memory: Cline/Roo Memory Ba",
  "what": "Covered by BOTH lenses; five-plus designs converging on files. (1) Cline's Memory Bank: a fixed hierarchy of markdown files (projectbrief, productContext, activeContext...",
  "ev": "vendor_claim_only",
  "build": "yes_this_week",
  "why": "The mechanically interesting parts are the RETRIEVAL POLICIES, not the storage formats: Devin-style triggers and scope-pinning make memory conditional rather than always-on, and the `/memories` virtual-prefix indirection separates the namespace the model sees from the store you actually run. <b>Caveat:</b> Anthropic ships what is effectively a defect list disguised as security guidance, none of that protection is provided, all of it is your problem, and nothing in the tool ranks, dedupes, or expires memories. File ops are asynchronous. Persistence means GDPR applies.",
  "src": [
   "All are vendor primary docs. ZERO published evidence that any of them improves task success, the only performance figure anywhere is Anthropic's self-reported +39% over baseline for memory combined with context editing on the 100-turn web-search eval, which the..."
  ]
 },
 {
  "name": "Anthropic's stated context-engineering doctrine: com",
  "what": "Anthropic's engineering post names three techniques for working past the context limit. COMPACTION: summarize a nearly-full window and reinitialize a new one from the summary.",
  "ev": "vendor_claim_only",
  "build": "yes_this_week",
  "why": "Zero-cost to adopt, and the recall-then-precision ORDERING is a testable protocol for whatever summary prompt a harness writes: draft for completeness first, then trim, rather than optimizing brevity into a summary that was never complete. <b>Caveat:</b> Entirely prescriptive, a vendor describing how it thinks its own product should be used. The recall-then-precision heuristic is asserted, not demonstrated.",
  "src": [
   "Anthropic's own engineering blog, appearing in BOTH lenses. This is guidance, not measurement: no benchmark, no ablation, no baseline, and no failure analysis accompanies any of it in what either lens retrieved."
  ]
 },
 {
  "name": "Sleep-time compute",
  "what": "Between user turns, an offline pass re-reads the raw context (documents, codebase, conversation history) and pre-computes a dense derived representation of what a future query is...",
  "ev": "vendor_claim_only",
  "build": "yes_this_week",
  "why": "Implementable as a post-session hook: after SessionEnd, run a cheap model over the transcript to rewrite the durable cards. A harness that already has SessionEnd hooks and a nightly job pattern needs a scheduling change, not new infrastructure. <b>Caveat:</b> Benefit depends on being able to guess future queries; compute is wasted when the next query is off-distribution. The benchmarks are math-reasoning tasks restructured into stateful form, not agentic coding sessions, external validity to a dev harness is unestablished.",
  "src": [
   "arXiv 2504.13171 (Lin, Snell, Wang, Packer, Wooders, Stoica, Gonzalez). Reported: ~5x reduction in test-time compute for equal accuracy on Stateful GSM-Symbolic and Stateful AIME; up to +13% accuracy (GSM-Symbolic) and +18% (AIME) when scaling sleep-time compute; ~2.5x..."
  ]
 },
 {
  "name": "File-based / filesystem memory",
  "what": "Memory is plain files the model reads and writes through ordinary file tools, in two layers: (a) always-loaded instruction files (CLAUDE.md / AGENTS.md) injected at session start at...",
  "ev": "vendor_claim_only",
  "build": "yes_this_week",
  "why": "This IS the architecture most local harnesses already run, and the 2026 evidence base is unusually kind to it. The concrete upgrades: split the always-loaded instruction file from an on-demand memory DIRECTORY that is retrieved rather than injected; make the model check the directory before acting; make the compaction summary a POINTER... <b>Caveat:</b> Always-loaded instruction files consume context every turn, so they are attention-budget-limited and degrade as they grow, the documented CLAUDE.md bloat failure. No retrieval ranking: a file is loaded or it is not. No forgetting mechanism, no contradiction detection, no temporal validity.",
  "src": [
   "COVERED BY BOTH LENSES. Vendor primary docs (platform.claude.com memory-tool docs, the context-management announcement) plus the AGENTS.md ecosystem."
  ]
 },
 {
  "name": "Anthropic memory tool + context editing",
  "what": "Two shipped primitives. The memory tool is a file-based store in a dedicated memory directory on your own infrastructure, which the model creates/reads/updates/deletes across...",
  "ev": "vendor_claim_only",
  "build": "yes_this_week",
  "why": "It is the platform the harness runs on, so the primitives are available today with no integration work. <b>Caveat:</b> The 84% figure is vendor marketing on the vendor's own product and must never be cited as evidence. Context editing evicts TOOL RESULTS, a different and easier problem than compacting reasoning, do not conflate it with SelfCompact.",
  "src": [
   "Vendor primary documentation; public beta on the Claude Developer Platform alongside Sonnet 4.5, also on Bedrock and Vertex."
  ]
 },
 {
  "name": "Anthropic context editing",
  "what": "A server-side context edit declared in `context_management.edits`, gated by beta header `context-management-2025-06-27`.",
  "ev": "vendor_claim_only",
  "build": "yes_with_effort",
  "why": "Mechanically ideal for a tool-heavy harness, and the exclude_tools-protects-memory pattern maps exactly onto a harness that writes markdown/JSON cards to disk, the eviction pass must never eat the notes. <b>Caveat:</b> Beta. Eviction is chronological and CONTENT-BLIND: it cannot distinguish a load-bearing early file-read from a throwaway grep. `clear_tool_inputs` destroys the record of what was asked, so the model cannot reconstruct why a result existed.",
  "src": [
   "Mechanism and parameters from Anthropic's own docs and cookbook. The ONLY performance evidence is Anthropic's internal 100-turn web-search eval on Anthropic's own product blog: 84% token-consumption reduction, +29% over baseline for context editing alone, +39% combined..."
  ]
 },
 {
  "name": "Anthropic server-side compaction",
  "what": "Distinct from context editing: instead of evicting tool results, the API SUMMARIZES.",
  "ev": "vendor_claim_only",
  "build": "yes_with_effort",
  "why": "`pause_after_compaction` is the genuinely portable idea and is implementable harness-side today: compact, PERSIST the summary to disk as an inspectable artifact, then decide whether to continue, instead of letting the model barrel on over a summary nobody saw. <b>Caveat:</b> Beta and very new (Jan 2026 identifier), least externally validated thing in either lens. Dropping all blocks before the compaction marker is maximally destructive to the prompt cache: the whole prefix is rewritten, so the next request is a full cache write at 1.25x-2.0x input price.",
  "src": [
   "Anthropic platform docs plus the mirrored AWS Bedrock documentation page. No independent evaluation of summary fidelity retrieved. No fidelity, cost, or degradation numbers exist in the record, the only number is the illustrative trigger value 50000."
  ]
 },
 {
  "name": "Agent-searchable post-compaction history",
  "what": "Cursor's documented behavior: when the window fills, summarization gives the agent a fresh window with a summary of work so far, AND if the agent notices it needs detail the summary...",
  "ev": "weak",
  "build": "yes_this_week",
  "why": "A harness that already retains full transcripts on disk can expose a `search_own_history` tool to the post-compaction agent, a small addition that directly addresses the reported failure mode where an agent undoes work it forgot doing, because the record of doing it is still on disk. <b>Caveat:</b> Depends entirely on the agent NOTICING an absence, which is the hard part, and no source measures how often it does. An agent that confidently proceeds on an incomplete summary never issues the search, and 'confidently continuing on a lossy summary' is precisely the recurring shape of the Claude Code...",
  "src": [
   "Cursor's own summarization docs (vendor primary) per lens 03, via search summaries only. No numbers. The lens-04 verifier could not open any Cursor source and returned UNVERIFIABLE for this and the three sibling mechanisms."
  ]
 },
 {
  "name": "Restorable compression / just-in-time retrieval",
  "what": "Covered by BOTH lenses from two directions. Manus treats the file system as unlimited, persistent, agent-operable memory and compresses observations RESTORABLY: keep the URL but drop...",
  "ev": "weak",
  "build": "yes_this_week",
  "why": "The concrete upgrade for a harness that already writes cards and manifests: make every eviction RESTORABLE by storing the pointer, path, offset, and the command that produced it, beside the summary, so a dropped observation can be regenerated rather than reconstructed from a lossy paraphrase. <b>Caveat:</b> 'It works for us at our scale' is not evidence it beats a baseline. Restorability assumes the external artifact is still there and unchanged: a file path re-read after 40 turns may no longer contain what the summary claims it does. The mechanism has no controlled comparison anywhere in either lens.",
  "src": [
   "Both sources are vendor-primary and self-reported, with no controlled comparison from either. Lens 03 could NOT open the Manus blog at all, WebFetch was hard-refused session-wide, so all Manus detail is from search-result summaries and secondary write-ups (ZenML..."
  ]
 },
 {
  "name": "Recitation: rewrite a todo file into the TAIL of con",
  "what": "The agent maintains a todo.md and rewrites it as it works, pushing the current objective into the MOST RECENT position rather than leaving it stranded in the attention-disadvantaged...",
  "ev": "weak",
  "build": "yes_this_week",
  "why": "Trivially implementable as a hook that re-emits the current task card at the tail before each planning step. For a harness that already writes markdown cards this is a PLACEMENT change, not new machinery. <b>Caveat:</b> No measurement that it improves outcomes at all, and it costs tokens on every rewrite. Anecdotally strong, empirically unproven, exactly the kind of practice that gets copied because it sounds right. It also mutates the tail every turn, which is in tension with cache-stable-prefix discipline.",
  "src": [
   "Manus's own writeup, described as a practice adopted after observing drift. No controlled ablation retrieved by either lens, and the Manus primary page was never opened."
  ]
 },
 {
  "name": "Keep failures in context rather than scrubbing them",
  "what": "Manus argues explicitly against cleaning failed actions and stack traces out of context: the error IS the evidence that updates the model's implicit prior away from a failing branch.",
  "ev": "weak",
  "build": "yes_this_week",
  "why": "If true, aggressive error-scrubbing deletes the negative signal that stops an agent re-trying a dead branch, a plausible cause of the retry loops that show up in context-rot findings. <b>Caveat:</b> Unmeasured, and it conflicts with token economy. Plausibly right for the LAST failure and wrong for the tenth. Lens 03's proposed compromise, a compact permanent 'tried and failed' ledger, one line per failed approach, dropping the verbose traces, preserving the negative signal at ~2% of token cost, is...",
  "src": [
   "Manus's own writeup, stated as a lesson learned, never opened directly by either lens. No numbers. Directly contradicts a widely-followed harness rule (drop prior error messages once a successful tool call lands); no retrieved source adjudicates between them."
  ]
 },
 {
  "name": "Instruction files as the un-summarizable layer, relo",
  "what": "Instruction files are re-read from disk at session start and, per practitioner reporting, after compaction, making them the one part of context never passed through the summarizer.",
  "ev": "weak",
  "build": "yes_this_week",
  "why": "A local harness controls its own re-injection: rather than trusting the vendor to reload, inject the instruction file yourself on a post-compaction hook, which is exactly the gap the bug report describes. <b>Caveat:</b> The entire value depends on the reload actually happening and at least one bug report says it does not, verify locally rather than trusting either claim.",
  "src": [
   "Cursor's four-mode rule taxonomy is documented by Cursor. The 'CLAUDE.md is reloaded after each compaction' claim is practitioner-only and is DIRECTLY CONTRADICTED by open Claude Code issue #21925, '[DESIGN FLAW] Context compaction destroys workflow, no CLAUDE.md..."
  ]
 }
];
