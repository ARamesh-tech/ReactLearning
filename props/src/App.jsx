import Box from "./Box"
import "./App.css"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Nav></Nav>
      {/* <Box name="A.Ramesh kumaran" role="Data Engineer"/>
      <Box name="A.Sathesh kumaran" role="Senior Mechanical Engineer"/> */}
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
