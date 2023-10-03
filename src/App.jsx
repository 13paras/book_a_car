/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import data from "./utils/data.json";
import Header from "./components/Header";
import CarsListing from "./components/CarsListing";
import { useDispatch } from "react-redux";
import { setCars } from "./redux/slices/carsSlice";
import PageNavigation from "./components/PageNavigation";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCars(data.cars));
  }, []);
  return (
    <>
      <div className='font-poppins my-12 mx-auto max-w-[1250px]'>
        <Header />
        <CarsListing />
        <PageNavigation />
      </div>
    </>
  );
};

export default App;
