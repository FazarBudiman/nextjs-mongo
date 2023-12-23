import connectMongoDB from "@/libs/mongodb";
import Contact from "@/models/contact";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { namaDepan: namaDepan, namaBelakang: namaBelakang, gender: gender, category: category, alamat: alamat, email: email, noPhone: noPhone } = await request.json();
  await connectMongoDB();
  await Contact.findByIdAndUpdate(id, { namaDepan, namaBelakang, gender, category, alamat, email, noPhone });
  return NextResponse.json({ message: "Contact Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const contact = await Contact.findOne({ _id: id });
  return NextResponse.json({ contact }, { status: 200 });
}
