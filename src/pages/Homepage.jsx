import Hero from '../components/Hero.jsx';
import Works from '../components/Works.jsx';
import About from '../components/About.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
const Homepage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Works ishome={true} /> 
        <Testimonials  ishome={true}/>
        <Contact ishome={true}/>
        <Footer />
    </div>
  )
}

export default Homepage