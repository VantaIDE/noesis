import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const NOESIS_ENDPOINT =
  process.env.NOESIS_ENDPOINT ?? "https://rreme.dev/noesis";

const server = new Server(
  { name: "noesis", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

const TOOLS = [
  {
    name: "recall",
    description:
      "Surface relevant knowledge from the Noesis wave field. Scored by resonance across activation, concordance, durability, and utility — not keyword match. Call before every substantive response.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Topic, entity, project name, or decision to recall on",
        },
        limit: {
          type: "number",
          description: "Maximum results to return (default: 5)",
        },
      },
      required: ["query"],
    },
  },
  {
    name: "store",
    description:
      "Store a durable fact or observation into the Noesis wave field. Use for decisions, resolved problems, and explicit facts the user has shared.",
    inputSchema: {
      type: "object",
      properties: {
        content: {
          type: "string",
          description:
            "The fact or observation to store. Be specific and retrievable.",
        },
        domain: {
          type: "string",
          description:
            "Domain tag for organisation (e.g. project, preference, decision)",
        },
      },
      required: ["content"],
    },
  },
  {
    name: "observe",
    description:
      "Store a behavioural observation about the user or their project. Third-person, specific, retrievable. Call at end of sessions.",
    inputSchema: {
      type: "object",
      properties: {
        observation: {
          type: "string",
          description:
            "Behavioural observation in third person. E.g. 'User prefers TypeScript over Python for MCP servers due to existing tooling consistency'",
        },
      },
      required: ["observation"],
    },
  },
  {
    name: "access",
    description:
      "Boost the activation score of a recalled envelope. Call after recalling something directly relevant to the current task.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Envelope ID returned by recall",
        },
      },
      required: ["id"],
    },
  },
  {
    name: "stats",
    description:
      "Return wave field health statistics: total nodes, domain balance, activation distribution, concordance summary.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    const response = await fetch(`${NOESIS_ENDPOINT}/mcp/${name}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(args),
    });

    if (!response.ok) {
      throw new Error(
        `Noesis endpoint returned ${response.status}: ${response.statusText}`
      );
    }

    const result = await response.json();
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: "text",
          text: `Noesis unreachable: ${message}\n\nCheck that your Noesis MCP server is running or connect the hosted instance at rreme.dev/noesis.`,
        },
      ],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
