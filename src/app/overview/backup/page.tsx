"use client";
import StatusCard, { IJob } from "@/components/overview/statusCard";
import StatusHeader from "@/components/overview/header";
import { useState } from "react";

export default function BackupPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const jobList: IJob[] = [
    {
      id: "abc",
      name: "Backup Job 1 | WV | DB",
      status: "success",
      lastExecution: "10/12/2025",
      type: "hyper-V backup",
    },
    {
      id: "abcd",
      name: "Backup Job 1 | WV | DB",
      status: "success",
      lastExecution: "10/12/2025",
      type: "hyper-V backup",
    },
    {
      id: "abce",
      name: "Backup Job 1 | WV | DB",
      status: "success",
      lastExecution: "10/12/2025",
      type: "hyper-V backup",
    },
    {
      id: "abcf",
      name: "Backup Job 1 | WV | DB",
      status: "success",
      lastExecution: "10/12/2025",
      type: "hyper-V backup",
    },
  ];
  return (
    <div className=''>
      <StatusHeader />
      <div className='px-8 py-8 grid grid-cols-3 gap-4'>
        <StatusCard
          company='Dinamio'
          status='error'
          subtitle='Backups estão ok'
          jobCount={4}
          jobs={jobList}
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
        />
      </div>
    </div>
  );
}
