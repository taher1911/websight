import connectMongoDB from "@/libs/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, title_ar, description, description_ar } = await req.json();

  await connectMongoDB();
  const category = await Category.create({
    title,
    title_ar,
    description,
    description_ar,
  });

  return NextResponse.json(
    { msg: "category added!", category },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const categories = await Category.find();
  return NextResponse.json({ categories });
}

export async function PUT(req) {
  const { _id, title, title_ar, description, description_ar } =
    await req.json();
  await connectMongoDB();
  const updated = await Category.findByIdAndUpdate(_id, {
    title,
    title_ar,
    description,
    description_ar,
  });
  return NextResponse.json(
    { msg: "category updated!", updated },
    { status: 200 }
  );
}

export async function DELETE(req) {
  // req.nextUrl.searchParams.get(id)  =>this line  for get id from the query
  const { id } = await req.json();
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "category deleted." });
}
