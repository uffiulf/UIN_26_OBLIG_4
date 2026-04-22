import './App.css'
import Header from './components/Header'
import Assignments from './components/Assignments'
import OlavProfil from './components/olavprofil'

function App() {
  

  return (
    <>
    <main>
      <Header />
        <section>
          <OlavProfil />
        </section>
    <Assignments />
    </main>
    </>
  )
}

export default App
