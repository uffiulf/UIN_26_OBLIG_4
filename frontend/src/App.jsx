import './App.css'
import Header from './components/Header'
import Assignments from './components/Assignments'
import Lucas from './components/Lucas'

function App() {
  

  return (
    <>
    <Header />

    <main>

      <section>
        <Lucas />
      </section>

      <Assignments />
      
    </main>
    </>
  )
}

export default App
