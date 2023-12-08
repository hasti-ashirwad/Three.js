import { BrowserRouter } from 'react-router-dom';
import { About,Experience, Hero, Navbar, Tech,StarsCanvas, Contact } from "./components/index";
import Career from './components/Career';
import background from "../src/assets/background.png";
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className='relative z-20 'style={{ backgroundImage: `url(${background})` }}>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Experience />
      <Tech />
      <Career/>
      <About />
      <Contact/>
      {/* <Feedbacks /> */}
      <div className='relative z-0'>
        <StarsCanvas />
      </div>
    </div>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
