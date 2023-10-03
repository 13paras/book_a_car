import { Card, Pagination } from "@nextui-org/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slices/carsSlice";

const PageNavigation = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(state => state.car);
  return (
    <>
      <div className='items-flex mt-6 justify-between rounded-xl bg-cream p-2 px-4 shadow-lg'>
        <span>6 from 120</span>
        <Pagination
          showControls
          total={cars.length / 6}
          color='#4e9ded'
          initialPage={1}
          onChange={page => dispatch(setCurrentPage(page))}
        />
      </div>
    </>
  );
};

export default PageNavigation;
