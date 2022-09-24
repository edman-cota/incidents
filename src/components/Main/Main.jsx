import React, { useState } from "react";

const Main = () => {
  const [order, setOrder] = useState("");

  return (
    <div className="w-screen bg-[#121F3D] h-full flex justify-center">
      <div className="w-full max-w-xs flex justify-center align-middle">
        <form className="bg-[#24385b] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" for="username">
              Order #
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3"
              type="text"
              placeholder="Username"
            />
            <label className="block text-sm font-bold mb-2" for="username">
              Item ID(s):
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3"
              type="text"
              placeholder="Username"
            />
            <label className="block text-sm font-bold mb-2" for="username">
              Reason
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3"
              type="text"
              placeholder="Username"
            />
            <label className="block text-sm font-bold mb-2" for="username">
              Request
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3"
              type="text"
              placeholder="Username"
            />
            <label className="block text-sm font-bold mb-2" for="username">
              Incident #
            </label>
            <input
              className="bg-transparent shadow appearance-none border rounded w-full py-2 px-3"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
