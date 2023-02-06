import React from "react";
import { RiCustomerServiceFill } from "react-icons/Ri";
import { MdOutlineTravelExplore } from "react-icons/Md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row xl:flex-row gap-8">
      <div className="left lg:w-[70vw] xl:w-[70vw]">
        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className="py-6 xl:pb-24">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rem
          natus nisi repellendus. Maiores a tenetur libero nam in, consequuntur
          quo autem quisquam, incidunt laboriosam quia iusto. Harum, adipisci
          quas!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          rem natus nisi repellendus. Maiores a tenetur libero nam in,
          consequuntur quo autem quisquam, incidunt laboriosam quia iusto.
          Harum, adipisci quas! Harum, adipisci quas!Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Earum rem natus nisi repellendus.
        </p>
        <div className="support sm:space-y-4 md:space-y-4 flex gap-4 flex-col items-center justify-center  lg:flex-row xl:flex-row">
          <div className="left flex flex-col lg:flex-row xl:flex-row gap-2 items-center text-center">
            <button>
              <RiCustomerServiceFill size={50} />
            </button>
            <div className="content">
              <h3 className="pb-2">LEADING SERVICE</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 30 YEARS IN A ROW</p>
            </div>
          </div>
          <div className="right flex flex-col lg:flex-row xl:flex-row gap-2 items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className="content">
              <h3 className="pb-2">AUTOMATED BOOKINGS</h3>
              <p>ALL-INCLUSIVE COMPANY FOR 30 YEARS IN A ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right lg:w-[30vw] xl:w-[30vw]">
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Select</option>
              <option>Grande Antgua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="check-in flex flex-col my-4">
            <label>Check-In</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="check-out flex flex-col my-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
