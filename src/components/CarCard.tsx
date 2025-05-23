import React, { useState } from "react";
import Link from "next/link";
import { CarCardProps } from "@/src/interface/caeCardInterface";


const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className="rounded-2xl border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white max-w-sm mx-auto">
      <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-100">
        {imgError || !car.image?.[0] ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        ) : (
          <img
            src={car.image?.[0]} // use optional chaining to avoid crashes
            alt={`${car.make} ${car.model}`}
            className={`object-cover w-full h-full transition-transform duration-300 ${
              imgLoading ? "opacity-0" : "hover:scale-105"
            }`}
            onLoad={() => setImgLoading(false)}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          {car.make} {car.model}
        </h2>
        <p className="text-sm text-gray-600">
          Year: <span className="font-medium">{car.year}</span>
        </p>
        <p className="text-lg font-bold text-blue-600">
          ${car.price.toLocaleString()}
        </p>

        <Link
          href={`/cars/${car.id}`}
          className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
