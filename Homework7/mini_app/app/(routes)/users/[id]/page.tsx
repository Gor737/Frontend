import axios from "axios";
import { getUsers } from "@/app/(lib)/users";
import { notFound } from "next/navigation";
import { DeleteUser } from "./(componnets)/DeleteUser";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UserDetails({ params }: Props) {
  const { id } = await params;
  const users = await getUsers();
  const user = users.find((user) => user.id === Number(id));

  if (!user) return notFound();

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 py-20 text-[#f5e7a1] md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[32px] border border-[#d4af37]/30 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_35%),_#111111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-8">
          <div className="mb-8 flex flex-col gap-6 border-b border-[#d4af37]/25 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-[#d4af37]/60 bg-[#191919] text-2xl font-bold tracking-[0.12em] text-[#f9efbf] shadow-[0_0_22px_rgba(212,175,55,0.15)]">
                {initials}
              </div>

              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#d4af37]">
                  Profile
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#f8f3d9] md:text-4xl">
                  {user.name}
                </h1>
              </div>
            </div>

            <DeleteUser userId={user.id}/>
            <Link href={`/users/${user.id}/edit`} className="rounded-full border border-[#d4af37]/50 bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d0d0d] shadow-[0_0_20px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f0d87a]">
              Edit profile
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#121212] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b7a46c]">
                User ID
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#f5d975]">
                #{user.id}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#121212] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b7a46c]">
                Age
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#f5d975]">
                {user.age}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#121212] p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b7a46c]">
                Gender
              </p>
              <p className="mt-3 text-2xl font-semibold capitalize text-[#f5d975]">
                {user.gender}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#d4af37]/20 bg-[#121212] p-5">
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#b7a46c]">
                Status
              </p>
              <span className="rounded-full border border-[#d4af37]/40 bg-[#1a1a1a] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f0d87a]">
                Active
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#eae2ba]">
              A premium profile card for a modern user detail view with a luxury
              black-and-gold aesthetic.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
