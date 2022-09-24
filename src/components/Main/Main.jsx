import React, { useState } from "react";

const Main = () => {
  const [order, setOrder] = useState("");
  const [incident, setIncident] = useState("");

  const handleFocus = (event) => event.target.select();

  console.log(order);

  return (
    <div className="w-screen bg-[#121F3D] h-full flex justify-center">
      <div className="w-full max-w-xs flex justify-center align-middle">
        <form className="bg-[#24385b] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className=" bg-[#121F3D] rounded w-full py-3 px-3 mb-3 border-hidden font-light focus-visible:outline-none focus-visible:border-sky-500"
              type="text"
              placeholder="Order#"
              onChange={(e) => setOrder(e.target.value)}
              onFocus={handleFocus}
              value={order}
            />
            <input
              className=" bg-[#121F3D] rounded w-full py-3 px-3 mb-3 border-hidden font-light focus-visible:outline-none focus-visible:border-sky-500"
              type="text"
              placeholder="Item ID(s)"
            />
            <input
              className=" bg-[#121F3D] rounded w-full py-3 px-3 mb-3 border-hidden font-light focus-visible:outline-none focus-visible:border-sky-500"
              type="text"
              placeholder="Reason"
            />
            <input
              className=" bg-[#121F3D] rounded w-full py-3 px-3 mb-3 border-hidden font-light focus-visible:outline-none focus-visible:border-sky-500"
              type="text"
              placeholder="Request"
            />
            <input
              className=" bg-[#121F3D] rounded w-full py-3 px-3 mb-3 border-hidden font-light focus-visible:outline-none focus-visible:border-sky-500"
              type="text"
              placeholder="Incident#"
              onChange={(e) => setIncident(e.target.value)}
              onFocus={handleFocus}
              value={incident}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
