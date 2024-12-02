import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons/faInstagramSquare"
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"

const Footer = () => {
  return (
    <div id="contactUs"
      className="h-auto w-full flex flex-col lg:flex-row gap-x-5 px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8
    justify-center items-center bg-black">

      <div className="flex-1 px-4 sm:px-6 flex flex-col text-yellow-600 text-xl gap-y-4 sm:gap-y-4 md:gap-y-4 lg:gap-y-4 xl:gap-y-4">
        <span className="flex flex-row font-bold text-2xl">
          <a href="#">Sandra Dankwa</a>
        </span>

        <span className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae repellendus tempore provident magnam quibusdam, tenetur rem nesciunt suscipit, ut sed possimus adipisci eligendi harum, alias magni voluptatum modi consectetur.
        </span>
        <span className="text-white">

        </span>
      </div>

      <div className="flex-1 px-4 sm:px-6 flex flex-col justify-center items-center gap-y-4 sm:gap-y-4 md:gap-y-4 lg:gap-y-4 xl:gap-y-4">
        <span className="text-2xl font-bold text-yellow-600">Our Services</span>
        <span className="text-white flex flex-col justify-center items-center gap-y-3">
          <span className="hover:text-yellow-600 ">Customised Soap</span>
          <span className="hover:text-yellow-600 ">Bulk Liquid Soap</span>
          <span className="hover:text-yellow-600 ">Detergent</span>
          <span className="hover:text-yellow-600 ">Medicinal Soaps</span>
        </span>
      </div>

      <div className="flex-1 px-4 mt-4 sm:px-6 flex flex-col justify-center items-center gap-y-4 sm:gap-y-4 md:gap-y-4 lg:gap-y-4 xl:gap-y-4">
        <span className="text-2xl font-bold text-yellow-600">Useful Links</span>
        <span className="text-white flex flex-col justify-center items-center gap-y-3">
          <span className="text-white hover:text-yellow-600">Home</span>
          <span className="text-white hover:text-yellow-600">About Us</span>
          <span className="text-white hover:text-yellow-600">Services</span>

          <span className="text-white flex flex-row gap-x-5 justify-end items-end">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl hover:text-yellow-600 transform transition-transform duration-200 hover:scale-110 " />
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl hover:text-yellow-600 transform transition-transform duration-200 hover:scale-110" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl hover:text-yellow-600 transform transition-transform duration-200 hover:scale-110" />
            </a>
          </span>
        </span>
      </div>

    </div>
  )
}

export default Footer