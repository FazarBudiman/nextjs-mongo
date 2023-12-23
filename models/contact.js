import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    namaDepan: String,
    namaBelakang: String,
    gender: String,
    category: String,
    alamat: String,
    email: String,
    noPhone: String,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
