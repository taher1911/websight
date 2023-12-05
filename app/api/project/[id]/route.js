import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET({ params }) {
  console.log(params);
  await connectMongoDB();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}
