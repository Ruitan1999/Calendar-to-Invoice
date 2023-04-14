import { Nunito } from 'next/font/google'
import API from './api/api'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
     <API></API>

    </main>
  )
}
