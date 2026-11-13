import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/FirstBlock'
import { SecondBlock } from './components/SecondBlock'
import { ThirdBlock } from './components/ThirdBlock'


function App() {

  return (
    <>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </main>
    </>


  )
}

export default App