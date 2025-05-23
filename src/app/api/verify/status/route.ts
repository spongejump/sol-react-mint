import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const isVerified = cookieStore.get("phone_verified")?.value === "true";

  return NextResponse.json({ verified: isVerified });
}
