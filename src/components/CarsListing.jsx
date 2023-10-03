/* eslint-disable no-undef */
import ListingItem from "./ListingItem";
import { useSelector } from "react-redux";

const CarsListing = () => {
  const { cars, pagination, search } = useSelector(state => state.car);

  //filtering cars on the basis of Search
  const filteredCars = cars.filter(car =>
    car.car_manufacturer.toLowerCase().includes(search.toLowerCase())
  );
  const carsOnCurrentPage = filteredCars.slice(
    (pagination.currentPage - 1) * pagination.itemsPerPage,
    pagination.currentPage * pagination.itemsPerPage
  );

  return (
    <section className='flex flex-wrap justify-center gap-3'>
      {carsOnCurrentPage.map(carDetails => (
        <ListingItem key={carDetails.id} carDetails={carDetails} />
      ))}
    </section>
  );
};

export default CarsListing;
