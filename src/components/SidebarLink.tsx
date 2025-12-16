import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface sideLinkProps {
  children: ReactNode;
  title: string;
  to: string;
}

export default function SideLink({ children, title, to }: sideLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={`flex text-nowrap items-center gap-2 justify-start rounded-r-full min-w-[15dvw] w-fit py-4 pl-10 pr-4 transition-all duration-200 ${
        pathname === to
          ? "bg-red-500 hover:bg-red-500/80"
          : "hover:bg-red-600/15 hover:text-zinc-100 text-zinc-500"
      }`}
    >
      {children}
      <span className='h-full'>{title}</span>
    </Link>
  );
}
