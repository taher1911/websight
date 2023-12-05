import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, link, category, date, cover, images } = await req.json();

  await connectMongoDB();
  const project = await Project.create({
    title: name,
    tags: [category],
    date,
    link,
    cover,
    images,
  });

  return NextResponse.json({ msg: "project added!", project }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}

export async function PUT(req) {
  const { _id, name, link, category, date, cover, images } = await req.json();
  await connectMongoDB();
  const updated = await Project.findByIdAndUpdate(_id, {
    title: name,
    tags: [category],
    date,
    link,
    cover,
    images,
  });
  return NextResponse.json(
    { msg: "Project updated!", updated },
    { status: 200 }
  );
}

export async function DELETE(req) {
  // req.nextUrl.searchParams.get(id)  =>this line  for get id from the query
  const { id } = await req.json();
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "project deleted." });
}
