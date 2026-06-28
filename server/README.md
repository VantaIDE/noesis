# @vantaide/noesis

MCP server for [Noesis](https://github.com/VantaIDE/noesis) — the wave-based reasoning substrate for AI agents.

**They store. Noesis knows.**

---

## Install

```bash
npm install -g @vantaide/noesis
```

Or run without installing:

```bash
npx -y @vantaide/noesis
```

---

## Configure

### Claude Code

```json
{
  "mcpServers": {
    "noesis": {
      "command": "npx",
      "args": ["-y", "@vantaide/noesis"]
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "noesis": {
      "command": "npx",
      "args": ["-y", "@vantaide/noesis"],
      "env": {
        "NOESIS_ENDPOINT": "https://rreme.dev/noesis"
      }
    }
  }
}
```

### Cursor / Windsurf

Add to `.cursor/mcp.json` or `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "noesis": {
      "command": "npx",
      "args": ["-y", "@vantaide/noesis"]
    }
  }
}
```

---

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `NOESIS_ENDPOINT` | `https://rreme.dev/noesis` | Noesis server URL. Override for self-hosted. |

---

## Tools exposed

| Tool | Description |
|---|---|
| `recall` | Surface relevant knowledge by resonance scoring |
| `store` | Store a durable fact or decision |
| `observe` | Store a behavioural observation |
| `access` | Boost activation on a recalled envelope |
| `stats` | Wave field health and domain statistics |

---

## Self-host

The npm package proxies to a Noesis engine endpoint. To run your own engine,
deploy the Noesis server (requires a running EME instance) and set
`NOESIS_ENDPOINT` to your server URL.

Self-hosted setup docs: [github.com/VantaIDE/noesis](https://github.com/VantaIDE/noesis)

---

## License

MIT. The underlying Noesis engine is proprietary to Vanta IDE.
