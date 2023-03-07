import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import { useState } from "react";
import { useEffect } from "react";
import About from "./components/About";

function App() {

const [isLoading, setIsLoading] = useState(true);

const handleLoading = () => {
setIsLoading(false);
}

useEffect(()=>{
window.addEventListener("load",handleLoading);
return () => window.removeEventListener("load",handleLoading);
},[])

return !isLoading ? (
  <div className="App">
      <Navbar />
      <Hero />
      <About/>
  </div>
  ):(<Preloader />)
}

export default App;
