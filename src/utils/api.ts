export async function getCars() {
  const res = await fetch('/mock-data/cars.json');
  return res.json();
}

export async function getCarById(id: string) {
  const res = await fetch('/mock-data/cars.json');
  const cars = await res.json();
  return cars.find((car: any) => car.id === id);
}
