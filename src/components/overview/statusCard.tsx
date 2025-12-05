import { ChevronRight, Dot } from "lucide-react";
import { ReactNode } from "react";

interface StatusCardProps {
  children: ReactNode;
  status: "success" | "warning" | "error";
  company: string;
  subtitle: string;
  jobCount: number;
}

export default function StatusCard({
  children,
  status,
  company,
  subtitle,
  jobCount,
}: StatusCardProps) {
  const statusColor = {
    success:
      "bg-background-success border border-foreground-success text-foreground-success",
    error:
      "bg-background-error border border-foreground-error text-foreground-error",
    warning:
      "bg-background-warning border border-foreground-warning text-foreground-warning",
    default: "bg-zinc-500 border border-zinc-200",
  }[status];

  return (
    <div
      className={`max-w-[42rem] flex items-center justify-start gap-4 px-8 py-6 ${statusColor} rounded-lg`}
    >
      <ChevronRight />
      {children}
      <div className='flex gap-16 font-geist'>
        <div className='flex flex-col items-start'>
          <h2 className='font-semibold text-zinc-800 tracking-wide'>
            {company}
          </h2>
          <div className='flex items-center gap-2 text-sm'>
            <span>{subtitle}</span>
            <Dot />
            <span>{jobCount} Jobs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
