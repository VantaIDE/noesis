---
name: noesis-recall
description: >
  Gives your agent persistent memory across sessions — what you discussed,
  what was decided, what patterns emerged, what keeps going wrong. Recalls
  relevant context before every response. Stores key observations after every
  session. Works across machines, agents, and time. The agent doesn't ask you
  to repeat yourself. Powered by Noesis, a wave-based reasoning substrate that
  scores knowledge by resonance, not keyword match — so the right thing
  surfaces first, every time.
user-invocable: true
argument-hint: "What should I recall or store? (leave blank to auto-recall on every message)"
allowed-tools:
  - mcp__noesis__recall
  - mcp__noesis__store
  - mcp__noesis__observe
  - mcp__noesis__access
  - mcp__noesis__stats
effort: medium
model: claude-sonnet-4-6
license: MIT
compatibility: >
  Requires the Noesis MCP server to be connected. Hosted instance available
  at rreme.dev/noesis — no setup, no API key, one connection. Self-hosted via
  @vantaide/noesis on npm. Works in Claude Code, Claude.ai, Cursor, Codex,
  and any MCP-compatible agent. Skills synced across all connected agents
  share the same wave field — one memory, every agent.
---

# Noesis Recall

You have access to Noesis — a persistent wave-based reasoning substrate that
survives across sessions, machines, and agents. Use it actively and silently.

## When to recall — do this first, before every substantive response

Before answering any non-trivial query, call `recall` with the core topic,
entity, or project name from the user's message. This surfaces context from
past sessions: prior decisions, patterns that emerged, information the user
shared previously, work that was completed, problems that keep recurring.

Do not announce that you are recalling. Do not say "let me check my memory."
Just call it, integrate what returns, and respond as if you naturally know —
because now you do. The user should experience continuity, not narration.

If recall returns results, use them without attribution:
- Reference prior decisions without asking the user to repeat themselves
- Flag when a current request contradicts something previously decided
- Surface patterns the user may not have noticed: "this is the third time
  this approach has been tried — previous attempts stalled at X"

If recall returns nothing relevant, proceed normally. Do not mention it.

## What to recall on

- The user's name, handle, or role if mentioned
- Project names, product names, codebases
- Technical decisions: architecture choices, stack selections, rejected options
- Open problems or unresolved questions from prior sessions
- People, collaborators, or recurring relationships mentioned
- Any "remember this" instruction from the user

## When to store — end of substantive sessions

After completing meaningful work, call `observe` or `store` to persist what
matters. Store specific, retrievable facts — not summaries:

Good: `"User chose TypeScript over Python for the ingestion pipeline because the existing MCP server is in TS and they wanted consistent tooling"`
Bad: `"User discussed technology choices"`

Store after:
- Architectural or technical decisions and the reasoning behind them
- Problems encountered and how they were resolved
- Patterns in the user's preferences, working style, or recurring mistakes
- Explicit facts about the user's project, goals, or constraints
- Anything the user said to remember

## When to access — boosting signal

After recalling an envelope directly relevant to the current task, call
`access` on it. This increases its activation score so it surfaces faster
in future sessions. The system learns what matters from use.

## Transparency — when asked

If the user asks what you remember about them or their project, call `recall`
with their name or project name, then report the results directly. Only report
what Noesis returns. Never fabricate or infer beyond it.

If the user asks you to forget something, stop referencing that content in
this session. Persistent deletion requires managing the Noesis instance
directly.

## Scope — what this is not

Not a search engine. Recall on entities, decisions, and topics — not on
syntax questions or function names.

Not a context window replacement. Noesis stores durable knowledge and
behavioural observations across session boundaries. Working context lives
in the conversation. Noesis is for what needs to survive the session end.

Not a narration layer. The user should never hear "I recalled X" or "I
stored Y." The memory is invisible. The effect is not.

## Error handling

If the Noesis MCP server is unreachable, proceed without memory and tell
the user once: "Noesis is not connected — this session won't have memory
context. Check that your MCP server is running or connect the hosted
instance at rreme.dev/noesis."

Do not silently fail. Do not pretend to remember if Noesis is down.
