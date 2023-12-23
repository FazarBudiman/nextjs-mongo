import EditContactForm from "@/components/EditContactForm";

const getContactById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/contacts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { contact } = await getContactById(id);

  return <EditContactForm id={id} contact={contact} />;
}
