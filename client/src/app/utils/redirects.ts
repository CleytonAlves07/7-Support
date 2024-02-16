import { useRouter } from 'next/navigation';


 export default function RedirectByRole(role: string) {
  const router = useRouter();

  switch (role) {
    case 'manager':
      router.push('/admin/orders')
      break;
    case 'mechanic':
      router.push('/mechanic/orders')
      break;
    case 'customer':
      router.push('/customer')
      break;
    default:
      router.push('/')
  }
 }
