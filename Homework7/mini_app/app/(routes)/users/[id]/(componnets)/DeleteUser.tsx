'use client'
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
    userId: number;
}

export const DeleteUser = ({userId}: Props) => {
  const router = useRouter()

  const handleClick = async () => {
    try {
      const res = await axios.delete(`/api/users/${userId}`);
      router.push('/users');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-full border border-[#d4af37]/50 bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d0d0d] shadow-[0_0_20px_rgba(212,175,55,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f0d87a]"
    >
      Delete profile
    </button>
  );
};
