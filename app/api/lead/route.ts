// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";
const LEAD_TARGET = "https://spst-logistics.vercel.app/api/lead";
export async function POST(req: NextRequest) {
  const payload = await req.json();
  const r = await fetch(LEAD_TARGET, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  return new NextResponse(await r.text(), { status: r.status });
}
