import clsx from "clsx";
import {
  AlertTriangle,
  ChevronRight,
  CircleCheckBig,
  CircleX,
  Dot,
  Server,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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
  jobs,
  onToggle,
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
      className={`flex flex-col ${statusColor} border transition-all duration-300 ease-out rounded-lg overflow-hidden font-geist`}
    >
      {}
      <div
        className={clsx(
          `max-w-[42rem] flex items-center justify-start gap-4 px-8 py-6`,
          isExpanded ? `border-b ${statusColor}` : ``
        )}
        onClick={onToggle}
      >
        <ChevronRight
          className={clsx(
            `transition-transform duration-200 ease-out`,
            isExpanded && "rotate-90"
          )}
        />
        <div>
          {status === "warning" && <AlertTriangle />}
          {status === "success" && <CircleCheckBig />}
          {status === "error" && <CircleX />}
        </div>
        <div className='flex gap-16'>
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
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: -4, opacity: 0 }}
            animate={{ height: 320, opacity: 1 }}
            exit={{ opacity: 0.3 }}
            className='flex flex-col items-center justify-start h-80 overflow-y-auto overflow-x-hidden p-4'
          >
            {jobs.map((job) => (
              <div
                className={`flex justify-between items-center px-4 py-2 w-full border ${statusColor} !bg-black/5 rounded-sm`}
              >
                <div className='flex gap-3 items-center'>
                  <Server />
                  <div className='flex flex-col items-start'>
                    <h3 className='text-zinc-900 font-semibold'>{job.name}</h3>
                    {job.type && (
                      <span className='text-sm font-semibold'>{job.type}</span>
                    )}
                  </div>
                </div>
                <div className='flex flex-col justify-between items-end'>
                  <span className='text-sm'>
                    Last execution: {job.lastExecution}
                  </span>
                  <span className={`font-semibold`}>Status: {job.status}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
