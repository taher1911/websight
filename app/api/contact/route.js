import connectMongoDB from "@/libs/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, message } = await req.json();

  await connectMongoDB();
  await Message.create({ name, email, message });

  return NextResponse.json({ msg: "message sent!" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const messages = await Message.find();
  return NextResponse.json({ messages: messages.reverse() });
}

export async function DELETE(req) {
  // req.nextUrl.searchParams.get(id)  =>this line  for get id from the query
  const { id } = await req.json();
  await connectMongoDB();
  await Message.findByIdAndDelete(id);
  return NextResponse.json({ message: "message deleted." });
}
