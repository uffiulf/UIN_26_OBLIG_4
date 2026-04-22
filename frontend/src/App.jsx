import './App.css'
import Header from './components/Header'
import Assignments from './components/Assignments'
import OlavProfil from './components/olavprofil'
import HenrikProfil from './components/HenrikProfile'
import Lucas from './components/Lucas'
import ProfileCardMax from './components/ProfileCardMax'

function App() {
  

  return (
    <>
    <main>
      <Header />
        <section>
          <OlavProfil />
          <ProfileCardMax />
          <Lucas />
          <HenrikProfil />
        </section>
    <Assignments />
    </main>
    </>
  )
}

export default App
