"use client";

import { useState, useEffect } from "react";
import { Car } from "@/src/interface/carDataInterface";
import CarCard from "@/src/components/CarCard";
import Pagination from "@/src/components/Pagination";

const API_URL =
  "https://arpitjoshi.github.io/8e4474f3-d675-44c2-ba12-ccfacfa97c8b.json";

export default function HomePage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ make: "", model: "", year: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch cars: ${response.status} ${response.statusText}`
          );
        }
        const data: Car[] = await response.json();
        setCars(data);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching cars:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      const searchMatch =
        car.make.toLowerCase().includes(search.toLowerCase()) ||
        car.model.toLowerCase().includes(search.toLowerCase()) ||
        car.year.toString().includes(search);

      const makeMatch = filters.make
        ? car.make.toLowerCase().includes(filters.make.toLowerCase())
        : true;

      const modelMatch = filters.model
        ? car.model.toLowerCase().includes(filters.model.toLowerCase())
        : true;

      const yearMatch = filters.year
        ? car.year.toString().includes(filters.year)
        : true;

      return searchMatch && makeMatch && modelMatch && yearMatch;
    });
    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [search, filters, cars]);

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-700">Loading cars...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500 text-xl">Error loading cars: {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase text-gray-800">
          Automobile Lineup
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore a wide range of cars with advanced technology and style.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-8">
          <input
            type="text"
            placeholder="Search by make, model, or year"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3"
          />
          <select
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4"
            value={filters.make}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, make: e.target.value }))
            }
          >
            <option value="">All Makes</option>
            {[...new Set(cars.map((car) => car.make))].map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Model"
            value={filters.model}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, model: e.target.value }))
            }
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4"
          />
          <input
            type="text"
            placeholder="Year"
            value={filters.year}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, year: e.target.value }))
            }
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/4"
          />
        </div>

        {/* Car Grid */}
        {currentCars.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-12">
            No cars found matching your criteria.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <Pagination
            currentPage={currentPage}
            totalItems={filteredCars.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={(newItemsPerPage) => {
              setItemsPerPage(newItemsPerPage);
              setCurrentPage(1);
            }}
          />
        </div>
      </section>
    </main>
  );
}
