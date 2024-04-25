'use client'
import Image from "next/image";
import { propertyData } from "@data/property-data";
import { useState } from "react";

function ImageModal({ imageSrc, closeModal }) {

    const [image, setImage] = useState(imageSrc);

    const setImageIndex = (index) => {
        setImage(propertyData.imagePaths[index].image);
    }

    const handleClickOutside = (event) => {
        if (!event.target.classList.contains("image")) {
            closeModal();
        }
    };

    const [isFavourite, setIsFavourite] = useState(false);

    const toggleIsFavorite = () => {
      setIsFavourite(!isFavourite);
    };

    return (
        <div className="fixed inset-0 z-20 bg-gray-950 bg-opacity-80 overflow-y-auto h-full w-full flex items-center justify-center" onClick={handleClickOutside}>
            <div className="w-full mt-12 mx-4 shadow-lg rounded-md flex items-center justify-center flex-col ">
                <div className="text-center">
                    <Image
                        src={image}
                        alt={`description_of_image_`}
                        width="1400"
                        height="10"
                        className="image"
                    />
                </div>
                <div className=" space-x-10 mt-8 flex">
                    {propertyData.imagePaths.map((image, index) => (
                        <button key={index}
                            onClick={() => setImageIndex(index)}>
                            <Image
                                src={image.whiteIcon}
                                alt={`description_of_image_${index}`}
                                width="40"
                                height="10"
                                className="image"
                            />
                        </button>
                    ))}
                    <button onClick={toggleIsFavorite}>
                        <Image
                            src={
                                isFavourite ? "/icons/property_data/white-heart.png" : "/icons/property_data/heart_white.svg"
                            }
                            // src={propertyData.imagePathsLastImage}
                            alt={`description_of_image_ ${propertyData.imagePaths.length}`}
                            width="40"
                            height="10"
                            className="image"
                        />
                    </button>
                </div>

            </div>
        </div>
    );
}



export default ImageModal;