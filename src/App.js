import './App.css';
import Experince from './component/Experince/Experince';
import Intro from './component/Intro/Intro';
import Navbar from './component/Navbar/Navbar';
import Portfolio from './component/Portfolio/Portfolio';
import Services from './component/Service/Services';
import Works from './component/Works/Works';
import Testimonials from './component/Testimonials/Testimonials.js'
import Contact from './component/Contact/Contact.js'
import Footer from './component/Footer/Footer.js'
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style = {{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : '',
    }}>
   <Navbar />
   <Intro />
   <Services/>
   <Experince/>
   <Works/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
