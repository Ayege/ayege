import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import { useState } from "react";
import { useEffect } from "react";

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
  </div>
  ):(<Preloader />)
}

export default App;
