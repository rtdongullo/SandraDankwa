const ServiceCard = ({ serviceIcon, serviceHeader, serviceText }) => {
    return (
        <div className="w-full sm:w-80 md:w-96 lg:w-full xl:w-full h-auto 
        text-white flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 p-6 rounded-lg">


            <span className="flex flex-col justify-start items-start gap-y-2 text-left">
                <span className="flex flex-row gap-x-4 justify-center items-center">
                    <span className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 md:h-20 md:w-20 lg:h-20 lg:w-20 
                    border-2 border-yellow-600 rounded-full bg-black text-white text-4xl">
                        {serviceIcon}
                    </span>
                    <span className="font-bold text-lg text-yellow-600">{serviceHeader}</span>
                </span>
                <span className="text-sm sm:text-base overflow-hidden text-ellipsis break-words">{serviceText}</span>
            </span>
        </div>
    )
}

export default ServiceCard;

