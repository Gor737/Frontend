import { getUsers } from "@/app/(lib)/users";
import { notFound } from "next/navigation";
import { EditForm } from "./(components)/EditForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditUser({ params }: Props) {
  const { id } = await params;
  const users = await getUsers();
  const user = users.find((u) => u.id === Number(id));
  if (!user) return notFound();

  return (
    <EditForm user={user} />
  );
}
