import StatusCard from "@/components/overview/statusCard";
import StatusHeader from "@/components/overview/header";
import { AlertTriangle } from "lucide-react";

export default function backupPage() {
  return (
    <div className=''>
      <StatusHeader />
      <div>
        <StatusCard
          company='Dinamio'
          status='success'
          subtitle='Backups estão ok'
          jobCount={4}
        >
          <AlertTriangle />
        </StatusCard>
      </div>
    </div>
  );
}
