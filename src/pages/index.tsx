import { CardMainHome } from "@/components/Cards/cardMainHome";
// import { CardUser } from "@/components/Cards/cardUser";
import { Header } from "@/components/Header";
import { Roboto, Lexend } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })
export default function Home() {
  return (
    <main
      // className={roboto.className}
    >
  
        <Header />
        <CardMainHome />
        {/* <CardUser /> */}
    </main>
  )
}
