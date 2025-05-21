
import { useState } from 'react';
import { CarCarouselProps } from '@/src/interface/carsliderInterface';

export default function CarCarousel({ images }: CarCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-64 rounded overflow-hidden shadow-lg bg-gray-100">
      <img
        key={images[index]}
        src={images[index]}
        alt={`car-${index + 1}`}
        className="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
      />
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 shadow rounded-full p-3 text-xl select-none transition"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 shadow rounded-full p-3 text-xl select-none transition"
      >
        →
      </button>
    </div>
  );
}
