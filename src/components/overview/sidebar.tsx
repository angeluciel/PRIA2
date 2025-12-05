"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Database, RefreshCcw } from "lucide-react";
import SideLink from "@/components/SidebarLink";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className='h-dvh absolute left-0 top-0 w-[20dvw] pr-8 bg-zinc-950 flex flex-col py-8 gap-12'>
      <span className='flex text-2xl font-semibold tracking-widest font-geist pl-12'>
        <h1 className=''>PRI</h1>{" "}
        <h1 className='text-red-400 rotate-180 relative bottom-[1px]'>V</h1>
      </span>
      <div className='flex flex-col gap-4 font-geist items-start'>
        <SideLink title='Backup & Replication' to='/overview/backup'>
          <Database />
        </SideLink>
        <SideLink title='Patches & Atualizações' to='/overview/sccm'>
          <RefreshCcw />
        </SideLink>
      </div>
    </div>
  );
}
