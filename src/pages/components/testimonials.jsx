import AboutImage from "../../assets/aboutImage.jpg"

const Testimonials = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8
  h-64 sm:h-80 md:h-[30rem] lg:h-[40rem] xl:h-screen
  flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${AboutImage})`, backgroundAttachment: "fixed" }}>

      <div className="absolute inset-0 bg-[#000000] opacity-50"></div>

      <span className="text-white font-bold text-6xl">Testimonials</span> 


    </div>
  )
}

export default Testimonials