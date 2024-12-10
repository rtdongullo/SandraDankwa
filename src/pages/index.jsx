
import Hero from './components/hero'
import Services from './components/services'
import AboutUs from './components/aboutUs'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import AdsBoard from './components/adsBoard'
import Gallery from './components/gallery'

const Index = () => {
  return (
    <div>
        <Hero/>
       <AdsBoard/>
        <AboutUs/>
        <Services/> 
        <Testimonials/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Index