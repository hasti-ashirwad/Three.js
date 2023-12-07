import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components/index";
import Career from './components/Career';
import background from "../src/assets/background.png";


function App() {
  return (
    <BrowserRouter>
    <div className='relative z-20 bg-primary'  style={{ backgroundImage: `url(${background})` }}>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Experience />
      <Tech />
      <Career/>
      <About />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
