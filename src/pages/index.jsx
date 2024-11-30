
import Hero from './components/hero'
import Services from './components/services'
import AboutUs from './components/aboutUs'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import AdsBoard from './components/adsBoard'

const Index = () => {
  return (
    <div>
        <Hero/>
       <AdsBoard/>
        <AboutUs/>
        <Services/> 
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Index