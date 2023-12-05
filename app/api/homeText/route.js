import connectMongoDB from "@/libs/mongodb";
import HomeText from "@/models/homeText";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const texts = await HomeText.find();
  return NextResponse.json({ texts });
}

export async function PUT(req) {
  const { _id, data } = await req.json();
  await connectMongoDB();
  const updated = await HomeText.findByIdAndUpdate(_id, data);
  return NextResponse.json({ msg: "text updated!", updated }, { status: 200 });
}
