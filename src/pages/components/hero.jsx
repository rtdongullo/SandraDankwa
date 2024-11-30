import SoapHero from "../../assets/soapHero.jpg"

const Hero = () => {
  return (
    <div id="home"
      className="relative w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8
    h-64 sm:h-80 md:h-[30rem] lg:h-[40rem] xl:h-screen
    flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${SoapHero})` }}>

      <div className="absolute inset-0 bg-[#000000] opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center mb-4">
          Akwaaba
        </h1>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white text-center">
          I am the Best innovator in the world!
        </span>
      </div>
      
    </div>
  )
}

export default Hero