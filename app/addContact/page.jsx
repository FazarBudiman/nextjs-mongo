"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setnamaBelakang] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [noPhone, setNoPhone] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!namaDepan || !namaBelakang || !category || !gender || !alamat || !email || !noPhone) {
      alert("All Form is required");
      return;
    }

    try {
      const res = await fetch(`/api/contacts`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ namaDepan, namaBelakang, category, gender, alamat, email, noPhone }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input onChange={(e) => setNamaDepan(e.target.value)} value={namaDepan} className="border border-slate-500 px-8 py-2" type="text" placeholder="Nama Depan" />
      <input onChange={(e) => setnamaBelakang(e.target.value)} value={namaBelakang} className="border border-slate-500 px-8 py-2" type="text" placeholder="Nama Belakang" />
      <input onChange={(e) => setGender(e.target.value)} value={gender} className="border border-slate-500 px-8 py-2" type="text" placeholder="Gender" />
      <input onChange={(e) => setCategory(e.target.value)} value={category} className="border border-slate-500 px-8 py-2" type="text" placeholder="Kategori" />
      <input onChange={(e) => setAlamat(e.target.value)} value={alamat} className="border border-slate-500 px-8 py-2" type="text" placeholder="Alamat" />
      <input onChange={(e) => setEmail(e.target.value)} value={email} className="border border-slate-500 px-8 py-2" type="text" placeholder="Email" />
      <input onChange={(e) => setNoPhone(e.target.value)} value={noPhone} className="border border-slate-500 px-8 py-2" type="text" placeholder="No Phone" />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Contact
      </button>
    </form>
  );
}
