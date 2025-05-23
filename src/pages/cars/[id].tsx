import CarCarousel from "@/src/components/CarSlider";
import { Car } from "@/src/interface/carDataInterface";
import { getCarById } from "@/src/utils/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function CarDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    getCarById(id as string)
      .then((data) => {
        setCar(data);
      })
      .catch(() => {
        setError("Failed to load car details. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600 text-lg">Loading car details...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-center text-red-600">
        <p>{error}</p>
        <button
          onClick={() => router.reload()}
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    );

  if (!car) return <p>No car found.</p>;

  const formatPrice = (price: number) => `$${price.toLocaleString("en-US")}`;
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="mb-6 inline-block text-blue-600 font-semibold hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">
        {car.make} {car.model} ({car.year})
      </h1>

      <CarCarousel images={car.image} />

      <p className="mt-4 text-2xl font-semibold text-green-700">
        {formatPrice(car.price)}
      </p>

      <h2 className="mt-6 text-xl font-semibold">Key Specifications</h2>
      <ul className="mt-2 list-disc list-inside space-y-1">
        <li><strong>Engine:</strong> {car.engine}</li>
        <li><strong>Transmission:</strong> {car.transmission}</li>
        <li><strong>Fuel Type:</strong> {car.fuelType}</li>
        <li><strong>Horsepower:</strong> {car.horsepower} hp</li>
        <li><strong>Color:</strong> {car.color}</li>
        <li><strong>Mileage:</strong> {car.mileage.toLocaleString()} km</li>
        <li><strong>Previous Owners:</strong> {car.owners}</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Features</h2>
      <ul className="mt-2 list-disc list-inside space-y-1">
        {car.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
