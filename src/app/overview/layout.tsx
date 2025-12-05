import Sidebar from "@/components/overview/sidebar";
import { ReactNode } from "react";

export default function overview({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className='min-h-dvh bg-background text-foreground relative'>
      <Sidebar />
      <main className='relative ml-[20dvw]'>{children}</main>
    </div>
  );
}
