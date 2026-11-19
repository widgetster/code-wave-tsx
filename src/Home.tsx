import { Header } from "./components/Header"
import { FirstBlock } from "./pages/home/FirstBlock"
import { SecondBlock } from "./pages/home/SecondBlock"
import { ThirdBlock } from "./pages/home/ThirdBlock"
import { FourthBlock } from "./pages/home/FourthBlock"
import { Footer } from "./components/Footer"


export function Home() {

  return (
    <>
      <title>Home</title>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
      </main>

      <Footer />
    </>
  )
}