import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
import SandanAbout from "../../assets/sandanAbout.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons/faInstagramSquare"
import { faTiktok } from "@fortawesome/free-brands-svg-icons/faTiktok"


const AboutUs = () => {
  return (
    <div id="aboutUs" className="w-full bg-[#08030e] px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8
    h-auto
    flex flex-col lg:flex-row justify-center">

      <div className="w-full lg:w-1/2 p-4 text-white flex justify-center items-center">
        <div className="w-full sm:w-[300px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 
        border-4 border-yellow-600 rounded-lg overflow-hidden relative flex justify-center items-center">
          <img src={SandanAbout} alt="About Us Section Image" className="object-cover w-full h-full hover:scale-110 transition-all duration-300" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-4 text-white flex flex-col justify-center items-center 
      gap-y-4 sm:gap-y-12 md:gap-y-12 lg:gap-y-12 xl:gap-y-12">
        <span className="flex flex-col justify-center items">
          <span className="text-xl font-bold mb-4 text-yellow-600">About Us</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam quod ullam? Labore, placeat. Quaerat, sequi soluta sed adipisci quia labore harum sint dolor, eligendi perferendis aperiam maiores placeat similique.
          </p>
        </span>

        <span className="flex flex-col justify-center items">
          <span className="text-xl font-bold mb-4 text-yellow-600">Our Mission</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi debitis perspiciatis natus unde nulla accusantium incidunt, reiciendis dolorem consequuntur, tempore enim voluptatem minima odio? Odit at facilis ratione sequi molestiae?
          </p>
        </span>

        <span className="flex flex-col justify-center items-center gap-y-4">
          <span className="h-0.5 w-60 bg-white">
          </span>

          <span className="flex justify-center items-center gap-x-5 text-yellow-600">
            <a href="https://web.facebook.com/SanDanReadyCereals" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl hover:text-white transform transition-transform duration-200 hover:scale-110 " />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl hover:text-white transform transition-transform duration-200 hover:scale-110" />
            </a>

            <a href="https://www.tiktok.com/@sandancereals" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl hover:text-white transform transition-transform duration-200 hover:scale-110" />
            </a>
          </span>

        </span>
      </div>
      <span className="w-auto h-0.5 bg-white z-10"></span>
    </div>
  )
}

export default AboutUs