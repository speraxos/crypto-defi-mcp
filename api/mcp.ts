import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js"
import type { VercelRequest, VercelResponse } from "@vercel/node"
import { startServer } from "../src/server/base"

// Store transports by session ID
const transports: { [sessionId: string]: SSEServerTransport } = {}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  const server = startServer()

  if (req.method === "GET") {
    // SSE connection
    res.setHeader("Content-Type", "text/event-stream")
    res.setHeader("Cache-Control", "no-cache")
    res.setHeader("Connection", "keep-alive")

    const transport = new SSEServerTransport("/api/mcp", res as any)
    transports[transport.sessionId] = transport

    req.on("close", () => {
      delete transports[transport.sessionId]
    })

    await server.connect(transport)
    return
  }

  if (req.method === "POST") {
    // Handle messages
    const sessionId = req.query.sessionId as string
    const transport = transports[sessionId]

    if (!transport) {
      return res.status(400).json({ error: "No transport found for session" })
    }

    await transport.handlePostMessage(req as any, res as any)
    return
  }

  return res.status(405).json({ error: "Method not allowed" })
}
