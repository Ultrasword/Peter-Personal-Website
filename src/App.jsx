import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, End} from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className = "bg-hero-gradient bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  )
}

export default App;