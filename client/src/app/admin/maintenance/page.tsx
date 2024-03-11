
import MaintenanceForm from '@/app/components/maintenance';
import Sidebar from '@/app/components/sidebar';


export default function AdminMaintenace() {
  return (
    <>
      <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">
        <MaintenanceForm />
      </main>
    </div>
    </>
  )
}
