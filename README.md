# Noesis

**They store. Noesis knows.**

Every AI memory product on the market does the same thing: it stores what you said and retrieves it by keyword or vector similarity. Start a new session and your agent reads the database. Close the gap between what it finds and what you meant. Hope it surfaces the right thing.

Noesis is built differently.

Noesis is the public face of EME — the Epistemic Memory Engine — a wave-based reasoning substrate that scores every piece of knowledge across four axes: activation, concordance, durability, and utility. It doesn't retrieve. It surfaces. The right thing rises because the system has been paying attention to what matters, isolating noise through entropy rather than time, and accumulating concordance across every session you've ever run.

Your agent doesn't remember. It *knows*.

---

## What's in this repo

```
noesis/
├── skills/
│   ├── noesis-recall/      — persistent cross-session memory. free.
│   ├── pitch-adversary/    — five-vector adversarial stress-testing. free.
│   └── strategy-guardian/  — trading strategy memory and rule enforcement. paid.
├── server/                 — @vanta-ide/noesis npm package (MCP server stub)
└── .github/workflows/      — auto-publish to npm on tag push
```

Skills are agent instructions packaged as `SKILL.md` files. Install them into Claude Code, Claude.ai, Codex, or any MCP-compatible agent. Each skill calls the Noesis MCP server — hosted at `rreme.dev/noesis` or self-hosted via the npm package.

---

## Install a skill

```bash
# via skillfish CLI
npx skillfish add vanta-ide/noesis noesis-recall
npx skillfish add vanta-ide/noesis pitch-adversary
```

Or download the `SKILL.md` directly from any skill folder and drop it into your agent's skills directory.

---

## Connect the Noesis MCP server

**Hosted (zero setup):**

```json
{
  "mcpServers": {
    "noesis": {
      "command": "npx",
      "args": ["-y", "@vanta-ide/noesis"],
      "env": {
        "NOESIS_ENDPOINT": "https://rreme.dev/noesis"
      }
    }
  }
}
```

**Self-hosted:**

```bash
npm install -g @vanta-ide/noesis
noesis serve --port 3100
```

Point `NOESIS_ENDPOINT` at your instance. The wave field, scoring, and all persistence run locally. Nothing leaves your machine.

---

## The difference

| | Every other memory tool | Noesis |
|---|---|---|
| Mechanism | Store → retrieve | Score → surface |
| Retrieval | Keyword or vector similarity | Resonance across four axes |
| Session boundary | Resets or requires manual sync | Survives. Accumulates. |
| Noise handling | Time-based decay | Entropy-based isolation |
| Gets smarter | No | Yes — concordance increases with use |
| Works across agents | Depends on config | Native — one wave field, all agents |

---

## Skills

### `noesis-recall` — free
Gives your agent persistent memory across every session, every machine, every agent. Recalls relevant context before every response. Stores key observations after every session. The agent doesn't ask you to repeat yourself.

### `pitch-adversary` — free
Five simultaneous attack vectors on any pitch, thesis, plan, or argument. Severity-ranked. Calibrated to audience. Remembers which objections you've already addressed and hunts for what you haven't. Doesn't soften when you push back.

### `strategy-guardian` — paid
Learns your trading rules from your journal, backtests, and stated strategy. Flags in real time when your current setup matches patterns that have historically failed your rules. The only skill that remembers your strategy across every session and enforces it against your own behaviour.

---

## Architecture

Noesis is the public interface to EME (Epistemic Memory Engine), the reasoning substrate at the core of the RREME stack.

EME is not a database. It is a wave field — a continuous amplitude memory architecture where every piece of knowledge has a position in four-dimensional scoring space. Knowledge that is accessed rises. Knowledge that contradicts established patterns loses concordance. Knowledge that is never relevant decays through entropy, not time.

The proprietary engine — wave field implementation, scoring algorithms, concordance calculation, Memoria training platform — is closed source and runs on Vanta's infrastructure. The skills and the MCP server interface are open. The intelligence is not.

**RREME stack:** EME (memory) → CTR (execution) → Synapse (validation) → SOVEREIGN (orchestration)

---

## License

MIT — skills and server interface.

The underlying Noesis engine, wave architecture, concordance scoring, and trained models are proprietary to Vanta IDE and are not covered by this license.

---

## Links

- MCP Market: [mcpmarket.com/@vanta-ide](https://mcpmarket.com/@vanta-ide)
- Hosted endpoint: rreme.dev/noesis *(launching soon)*
- Built by [@BlaqGhostShell](https://github.com/BlaqGhostShell)
