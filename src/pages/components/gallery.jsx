import Gallery1 from "../../assets/gallery1.jpg"
import Gallery2 from "../../assets/gallery2.jpg"
import Gallery3 from "../../assets/gallery3.jpg"
import Gallery4 from "../../assets/gallery4.jpg"
import Gallery5 from "../../assets/gallery5.jpg"
import Gallery6 from "../../assets/gallery6.jpg"



const Gallery = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 h-auto bg-[#08030e] 
        flex flex-col justify-center items-center relative">

            
            <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">

                
                <div className="bg-black rounded-lg overflow-hidden">
                    <img src={Gallery1} alt="Gallery Item 1" className="w-full h-64 object-cover hover:scale-110 transition-all duration-300" />
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold text-yellow-600">Convenience Guaranteed</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi cupiditate sequi vitae quaerat iste debitis ipsa rerum.
                        </p>
                    </div>
                </div>

                
                <div className="bg-black rounded-lg overflow-hidden">
                    <img src={Gallery2} alt="Gallery Item 2" className="w-full h-64 object-cover hover:scale-110 transition-all duration-300" />
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold text-yellow-600">Ready-to-serve Cereals</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi cupiditate sequi vitae quaerat iste debitis ipsa rerum.
                        </p>
                    </div>
                </div>

                
                <div className="bg-black rounded-lg overflow-hidden">
                    <img src={Gallery3} alt="Gallery Item 3" className="w-full h-64 object-cover hover:scale-110 transition-all duration-300" />
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold text-yellow-600">The Student's Choice</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi cupiditate sequi vitae quaerat iste debitis ipsa rerum.
                        </p>
                    </div>
                </div>

                
                <div className="bg-black rounded-lg overflow-hidden">
                    <img src={Gallery4} alt="Gallery Item 4" className="w-full h-64 object-cover hover:scale-110 transition-all duration-300" />
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold text-yellow-600">Sugar Free</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi cupiditate sequi vitae quaerat iste debitis ipsa rerum.
                        </p>
                    </div>
                </div>

                
                <div className="bg-black rounded-lg overflow-hidden">
                    <img src={Gallery5} alt="Gallery Item 5" className="w-full h-64 object-cover hover:scale-110 transition-all duration-300" />
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold text-yellow-600">Good for All</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi cupiditate sequi vitae quaerat iste debitis ipsa rerum.
                        </p>
                    </div>
                </div>

                
                <div className="bg-black rounded-lg overflow-hidden">
                    <img src={Gallery6} alt="Gallery Item 6" className="w-full h-64 object-cover hover:scale-110 transition-all duration-300" />
                    <div className="p-4 text-white">
                        <h3 className="text-xl font-bold text-yellow-600">Timeless Taste</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quasi cupiditate sequi vitae quaerat iste debitis ipsa rerum.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gallery;
