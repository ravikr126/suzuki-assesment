export async function getCars() {
  const res = await fetch('/mock-data/cars.json');
  return res.json();
}

export async function getCarById(id: string) {
  const response = await fetch(
    "https://arpitjoshi.github.io/8e4474f3-d675-44c2-ba12-ccfacfa97c8b.json"
  );
  const cars = await response.json();
  return cars.find((car: any) => car.id === parseInt(id));
}
