import connectMongoDB from "@/libs/mongodb";
import Service from "@/models/service";
import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { title, title_ar, img, services } = await req.json();

//   await connectMongoDB();
//   await Service.create({ title, title_ar, img, services });

//   return NextResponse.json({ msg: "Service created!" }, { status: 201 });
// }

export async function GET() {
  await connectMongoDB();
  const services = await Service.find();
  return NextResponse.json({ services });
}

export async function PUT(req) {
  const { _id, title, title_ar, img, services } = await req.json();
  await connectMongoDB();
  await Service.findByIdAndUpdate(_id, { title, title_ar, img, services });
  return NextResponse.json({ msg: "Service updated!" }, { status: 200 });
}
