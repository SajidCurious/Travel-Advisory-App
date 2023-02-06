import React from "react";
import { RiCustomerServiceFill } from "react-icons/Ri";
import { MdOutlineTravelExplore } from "react-icons/Md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col gap-4">
      <div className="left">
        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className="py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rem
          natus nisi repellendus. Maiores a tenetur libero nam in, consequuntur
          quo autem quisquam, incidunt laboriosam quia iusto. Harum, adipisci
          quas!
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
      <div className="right">
        <div className="border text-center">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p>12 HOURS LEFT</p>
          <p>BOOK NOW AND SAVE</p>
        </div>
        <form>
          <div>
            <label>Destination</label>
            <select>
              <option>Select</option>
              <option>Grande Antgua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="check-in">
            <label>Check-In</label>
            <input type="date" />
          </div>
          <div className="check-out">
            <label>Check-Out</label>
            <input type="date" />
          </div>
          <button>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
