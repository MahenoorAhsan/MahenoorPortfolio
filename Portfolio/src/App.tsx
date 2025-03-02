
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import {Skills} from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Skills/>

    </div>
  )
}

export default App
