import { getUsers } from "@/app/(lib)/users";
import { UserCard } from "./components/UserCard";
import Link from "next/link";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 py-20 text-[#f5e7a1] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#d4af37]/30 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]">
              Community
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#f8f3d9] md:text-5xl">
              Users
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href={'/users/add'} className="rounded-full border border-[#d4af37]/50 bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d0d0d] shadow-[0_0_20px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f0d87a]">
              Add User
            </Link>

            <div className="rounded-full border border-[#d4af37]/40 bg-[#111111] px-4 py-2 text-sm font-medium text-[#f0d87a]">
              {users.length} members
            </div>
          </div>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
                <UserCard user={user} />
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
