import ProductForm from '@/app/components/product';
import Sidebar from '@/app/components/sidebar';

export default function AdminProduct() {
  return (
    <>
      <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4">
        <ProductForm />
      </main>
    </div>
    </>
  )
}
