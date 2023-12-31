import connectMongoDB from "@/libs/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { namaDepan, namaBelakang, gender, category, alamat, email, noPhone } = await request.json();
  await connectMongoDB();
  await Contact.create({ namaDepan, namaBelakang, gender, category, alamat, email, noPhone });
  return NextResponse.json({ message: "Contact Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const contact = await Contact.find();
  return NextResponse.json({ contact });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
}
