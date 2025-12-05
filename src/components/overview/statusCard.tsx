import clsx from "clsx";
import {
  AlertTriangle,
  ChevronRight,
  CircleCheckBig,
  CircleX,
  Dot,
} from "lucide-react";

export interface IJob {
  id: string;
  name: string;
  status: "success" | "warning" | "error";
  lastExecution: string;
  type?: string;
}

interface StatusCardProps {
  status: "success" | "warning" | "error";
  company: string;
  subtitle: string;
  jobCount: number;
  jobs: IJob[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function StatusCard({
  status,
  company,
  subtitle,
  jobCount,
  isExpanded,
}: StatusCardProps) {
  const statusColor = {
    success:
      "bg-background-success border-foreground-success text-foreground-success",
    error: "bg-background-error border-foreground-error text-foreground-error",
    warning:
      "bg-background-warning border-foreground-warning text-foreground-warning",
    default: "bg-zinc-500  border-zinc-200",
  }[status];

  return (
    <div
      className={`flex flex-col ${statusColor} border transition-all duration-300 ease-out rounded-lg overflow-hidden`}
    >
      {}
      <div
        className={clsx(
          `max-w-[42rem] flex items-center justify-start gap-4 px-8 py-6`,
          isExpanded ? `border-b ${statusColor}` : ""
        )}
      >
        <ChevronRight />
        <div>
          {status === "warning" && <AlertTriangle />}
          {status === "success" && <CircleCheckBig />}
          {status === "error" && <CircleX />}
        </div>
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
      <div className='text-foreground-error'>
        <div className=''>
          <div>aaaa</div>
        </div>
      </div>
    </div>
  );
}
