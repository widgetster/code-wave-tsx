import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/FirstBlock'
import { SecondBlock } from './components/SecondBlock'


function App() {

  return (
    <>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
      </main>
    </>


  )
}

export default App