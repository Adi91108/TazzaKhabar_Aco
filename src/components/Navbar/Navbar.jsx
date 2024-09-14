import React from "react";
import Select from "react-select";
import { LuSearch } from "react-icons/lu";
import { supportedCountryData, supportedLanguageData } from "../../StaticData";
import { CustomStyle } from "../ReactSelectStyle";


const Navbar = ({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  /// Set the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="mb-3 lg:mb-8 bg-none">
        <div className="flex justify-between flex-col items-center lg:grid grid-cols-8 py-3 lg:py-5 bg-none">
          <h1
            className="col-span-2 text-[25px] md:text-[30px] lg:text-[40px] font-extrabold flex items-center 
         bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer"
          >
            Tazza<span className="text-slate-600 bg-none">Khabar</span>
          </h1>

          <div className="col-span-4 w-full hidden lg:flex justify-center items-center bg-none">
            <div className="relative w-[80%] xl:w-[500px] 2xl:w-[600px] bg-none">
              <input
                type="text"
                placeholder="Search Some Tazzakhabar..."
                className="w-full py-[14px] rounded-xl border-[2px]
                focus:outline-none px-3 font-medium placeholder-gray-600 focus:placeholder-gray-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <LuSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-[22px] text-gray-500 bg-none" />
            </div>
          </div>

          <div className="col-span-2 flex justify-end items-center placeholder-gray-600 focus:placeholder-gray-500 gap-1.5 md:gap-4 bg-none">
            <Select
              options={supportedCountryData}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e)}
              placeholder="Country"
              label="Country"
              className="w-full xl:w-[150px] font-bold cursor-pointer !text-[14px] !md:text-[16px] placeholder-gray-600 focus:placeholder-gray-500 bg-none"
                styles={CustomStyle()}
            />
            <Select
              options={supportedLanguageData}
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e)}
              placeholder="Language"
              className="w-full xl:w-[150px] font-bold cursor-pointer !text-[14px] !md:text-[16px] bg-none"
                styles={CustomStyle()}
            />
          </div>
        </div>

        {/* For Mobile Search */}
        <div className="relative lg:hidden w-full">
          <input
            type="text"
            placeholder="Search something..."
            className="w-full py-[10px] rounded-xl border-[2px]
                focus:outline-none px-3 font-medium text-gray-500 text-[14px]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <LuSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-[16px] text-gray-500 bg-none" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
