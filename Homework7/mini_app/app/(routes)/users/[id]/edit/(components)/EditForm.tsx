'use client'

import { User } from "@/app/(lib)/types";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
    user:User
}

export const EditForm = ({user}:Props) => {
  const {id} = user;
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const age = Number(formData.get('age'));
    const gender = formData.get('gender') as string;

    if(!name || !age || !gender) return;

    const updatedUser:Omit<User, "id"> = {
        name,
        age,
        gender
    }
    try{
        const res = await axios.put(`/api/users/${id}`, updatedUser);
        router.push(`/users/${id}`);
        console.log(res);
    }catch(err){
        console.log(err);
    }
  }

  return (
    <main className="min-h-[calc(100vh-6rem)] bg-[#0b0b0b] px-4 py-12 text-[#f5e7a1] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 border-b border-[#d4af37]/30 pb-6">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
            User directory / Profile #{id}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#f8f3d9] sm:text-5xl">
            Edit profile
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#9f956d]">
            Refine the details for {user.name}&apos;s community profile.
          </p>
        </div>

        <form
          action={handleSubmit}
          className="relative overflow-hidden rounded-[28px] border border-[#d4af37]/35 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_34%),#111111] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:p-9"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#f5dc82] to-transparent" />

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="group flex flex-col gap-2 sm:col-span-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9b873]">
                Full name
              </span>
              <input
                type="text"
                name="name"
                defaultValue={user.name}
                className="h-14 rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b] px-4 text-sm text-[#f8f3d9] outline-none transition placeholder:text-[#665f47] focus:border-[#f0d87a] focus:ring-1 focus:ring-[#d4af37]/50"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9b873]">
                Age
              </span>
              <input
                type="number"
                name="age"
                defaultValue={user.age}
                min="1"
                className="h-14 rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b] px-4 text-sm text-[#f8f3d9] outline-none transition placeholder:text-[#665f47] focus:border-[#f0d87a] focus:ring-1 focus:ring-[#d4af37]/50"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9b873]">
                Gender
              </span>
              <select
                name="gender"
                id="gender"
                defaultValue={user.gender}
                className="h-14 rounded-2xl border border-[#d4af37]/25 bg-[#0b0b0b] px-4 text-sm capitalize text-[#f8f3d9] outline-none transition focus:border-[#f0d87a] focus:ring-1 focus:ring-[#d4af37]/50"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </label>
          </div>

          <div className="mt-9 flex items-center justify-between gap-4 border-t border-[#d4af37]/15 pt-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#817650]">
              Profile ID #{id}
            </span>
            <button
              type="submit"
              className="rounded-full border border-[#e1bd46] bg-[#d4af37] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0b0b0b] shadow-[0_0_24px_rgba(212,175,55,0.16)] transition hover:-translate-y-0.5 hover:bg-[#f0d87a] focus:outline-none focus:ring-2 focus:ring-[#f0d87a] focus:ring-offset-2 focus:ring-offset-[#111111]"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
