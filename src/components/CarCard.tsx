import React from 'react';
import { Car } from '@/interface/carDataInterface';
import Link from 'next/link';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="rounded-2xl border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white max-w-sm mx-auto">
      <div className="h-48 overflow-hidden">
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">{car.make} {car.model}</h2>
        <p className="text-sm text-gray-600">Year: <span className="font-medium">{car.year}</span></p>
        <p className="text-lg font-bold text-blue-600">${car.price.toLocaleString()}</p>

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
