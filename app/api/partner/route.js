import connectMongoDB from "@/libs/mongodb";
import Partner from "@/models/partner";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { image } = await req.json();

  await connectMongoDB();
  const part = await Partner.create({ image });

  return NextResponse.json(
    { msg: "partner added!", partner: part },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const partners = await Partner.find();
  return NextResponse.json({ partners });
}

export async function PUT(req) {
  const { _id, image } = await req.json();
  await connectMongoDB();
  const updated = await Partner.findByIdAndUpdate(_id, { image });
  return NextResponse.json(
    { msg: "Message updated!", updated },
    { status: 200 }
  );
}

export async function DELETE(req) {
  // req.nextUrl.searchParams.get(id)  =>this line  for get id from the query
  const { id } = await req.json();
  await connectMongoDB();
  await Partner.findByIdAndDelete(id);
  return NextResponse.json({ message: "partner deleted." });
}
