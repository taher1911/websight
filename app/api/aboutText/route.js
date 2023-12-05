import connectMongoDB from "@/libs/mongodb";
import AboutText from "@/models/aboutText";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const aboutTexts = await AboutText.find();
  return NextResponse.json({ aboutTexts });
}

export async function PUT(req) {
  const { _id, data } = await req.json();
  await connectMongoDB();
  const updated = await AboutText.findByIdAndUpdate(_id, data);
  return NextResponse.json({ msg: "text updated!", updated }, { status: 200 });
}
