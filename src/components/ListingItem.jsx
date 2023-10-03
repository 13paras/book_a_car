/* eslint-disable react/prop-types */
import { Button, Card, CardBody, CardHeader, Chip, Divider, Image } from "@nextui-org/react";
import { CogIcon, FuelIcon, GaugeIcon, HeartIcon, User2Icon } from "lucide-react";
import React from "react";

const ListingItem = ({ carDetails }) => {
  return (
    <>
      <Card className='mt-10 w-[400px] bg-cream'>
        <CardHeader>
          <Image
            className='w-[370px]'
            src={
              "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </CardHeader>
        <CardBody>
          <div className='items-flex justify-between'>
            <h2 className='text-2xl font-semibold text-blackishBlue'>
              <span className='pr-2'>{carDetails.car_manufacturer}</span>
              {carDetails.car_model}
            </h2>
            <Chip variant='bordered' color='primary' className='text-black'>
              {carDetails.year_of_launched}
            </Chip>
          </div>
          <ul className='grid grid-cols-2 justify-between space-y-3 pt-2 text-medium  text-zinc-600'>
            <li className='items-flex space-x-2'>
              {" "}
              <User2Icon color='#4e9ded' className='mr-2' /> {carDetails.seating_capacity} People
            </li>
            <li className='items-flex'>
              <FuelIcon color='#4e9ded' className='mr-2' /> {carDetails.fuel_variant}
            </li>
            <li className='items-flex'>
              <GaugeIcon color='#4e9ded' className='mr-2' /> {carDetails.mileage} /1-litre
            </li>
            <li className='items-flex'>
              <CogIcon color='#4e9ded' className='mr-2' /> {carDetails.gear_type}
            </li>
          </ul>
          <Divider className='my-4' />
          <ul className='items-flex justify-between'>
            <li className='text-3xl font-semibold text-blackishBlue'>
              ${carDetails.price_per_month}{" "}
              <span className='text-medium text-zinc-600'>/month</span>
            </li>
            <li className='items-flex space-x-3'>
              <div className='rounded-xl bg-[#dbeafa] p-2'>
                <HeartIcon className=' rounded-xl' color='#4e9ded' size={20} />
              </div>
              <Button variant='solid' className='rounded-xl bg-[#4e9ded] font-semibold text-cream'>
                Rent Now
              </Button>
            </li>
          </ul>
        </CardBody>
      </Card>
    </>
  );
};

export default ListingItem;
