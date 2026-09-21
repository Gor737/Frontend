import { User } from "@/app/(lib)/types";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#d4af37]/30 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_38%),_#0d0d0d] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f1d77a] hover:shadow-[0_22px_65px_rgba(212,175,55,0.14)]">
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#f5dc82] to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4af37]/60 bg-[#191919] text-base font-bold tracking-[0.12em] text-[#f9efbf] shadow-[0_0_22px_rgba(212,175,55,0.12)]">
            {initials}
          </div>

          <div>
            <p className="text-xl font-semibold tracking-tight text-[#f7f2d8]">
              {user.name}
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[#d4af37]">
              {user.gender}
            </p>
          </div>
        </div>

        <span className="rounded-full border border-[#d4af37]/40 bg-[#141414] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-[#f0d87a]">
          Online
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-[#d4af37]/20 bg-[#121212] p-4">
        <div className="flex items-center justify-between text-sm text-[#dcd2a8]">
          <span className="uppercase tracking-[0.18em] text-[#b7a46c]">
            Age
          </span>
          <span className="text-lg font-semibold text-[#f5d975]">
            {user.age}
          </span>
        </div>
      </div>
    </article>
  );
};
