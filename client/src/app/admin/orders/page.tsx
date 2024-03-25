import ServiceOrderForm from '@/app/components/serviceorder';
import Sidebar from '@/app/components/sidebar';


export default function AdminOrders() {
  return (
    <>
      <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">
        <ServiceOrderForm />
      </main>
    </div>
    </>
  )
}
