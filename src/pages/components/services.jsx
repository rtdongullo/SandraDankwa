import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceCard from "../../components/serviceCard";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons/faBottleWater";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons/faBowlFood";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons/faPersonBreastfeeding";

const Services = () => {
  return (
    <div id="services" className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 h-auto bg-[#08030e] flex flex-col justify-center items-center relative">
       
        <h1 className="text-3xl pb-7 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ca8a03]">
          Our Services
        </h1>
     

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center items-center">
        <ServiceCard
          serviceIcon={<FontAwesomeIcon icon={faBottleWater}/>}
          serviceHeader={"Convenience Guaranteed"}
          serviceText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam quod ullam? Labore, placeat. Quaerat, sequi soluta sed adipisci quia labore harum sint dolor, eligendi perferendis aperiam maiores placeat similique."}
        />
        <ServiceCard
          serviceIcon={<FontAwesomeIcon icon={faBowlFood}/>}
          serviceHeader={"Ready-to-serve Cereals"}
          serviceText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam quod ullam? Labore, placeat. Quaerat, sequi soluta sed adipisci quia labore harum sint dolor, eligendi perferendis aperiam maiores placeat similique."}
        />
        <ServiceCard
          serviceIcon={<FontAwesomeIcon icon={faGraduationCap}/>}
          serviceHeader={"The Student's Choice"}
          serviceText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam quod ullam? Labore, placeat. Quaerat, sequi soluta sed adipisci quia labore harum sint dolor, eligendi perferendis aperiam maiores placeat similique."}
        />
        <ServiceCard
        serviceIcon={<FontAwesomeIcon icon={faPersonBreastfeeding}/>}
          serviceHeader={"Sugar Free"}
          serviceText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laboriosam quod ullam? Labore, placeat. Quaerat, sequi soluta sed adipisci quia labore harum sint dolor, eligendi perferendis aperiam maiores placeat similique."}
        />
        
      </div>
    </div>
  );
};

export default Services;

