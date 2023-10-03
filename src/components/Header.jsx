import { Input, Select } from "@nextui-org/react";
import { Search } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/carsSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleSearchChange = event => {
    dispatch(setSearch(event.target.value));
    console.log(event.target.value);
  };
  return (
    <header className='flex items-center space-x-4 rounded-2xl px-2 py-1'>
      {/* Search */}
      <Input
        type='text'
        placeholder='Search car manufacturer...'
        className='max-w-[420px]'
        onChange={handleSearchChange}
        endContent={
          <Search className='pointer-events-none flex-shrink-0 text-2xl text-default-400' />
        }
      />
    </header>
  );
};

export default Header;
