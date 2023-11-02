import Image from 'next/image'
import LogIn from '@/pages/login'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <LogIn />
    </QueryClientProvider>
  )
}
