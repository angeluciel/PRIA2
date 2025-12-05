import StatusCard, { IJob } from "@/components/overview/statusCard";
import StatusHeader from "@/components/overview/header";

export default function backupPage() {
  const jobList: IJob[] = [
    {
      id: "abc",
      name: "Backup Job 1 | WV | DB",
      status: "success",
      lastExecution: "10/12/2025",
    },
  ];
  return (
    <div className=''>
      <StatusHeader />
      <div className='px-8 py-8 grid grid-cols-3 gap-4'>
        <StatusCard
          company='Dinamio'
          status='warning'
          subtitle='Backups estão ok'
          jobCount={4}
          jobs={jobList}
          isExpanded
        />
      </div>
    </div>
  );
}
