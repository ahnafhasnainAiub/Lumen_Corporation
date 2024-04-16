import React from "react";

const ProductDetails1 = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row md:items-center">
      <div className="flex-1 mb-4 md:mb-0 md:w-1/2 mb-5"> {/* Added mb-5 here */}
      <h2 className="text-2xl font-bold text-center mb-4 bg-green-500 text-white p-2 mx-10">Nylon Chips</h2>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ITEM</th>
              <th className="px-4 py-2">SPECIFICATION</th>
              <th className="px-4 py-2">IV</th>
              <th className="px-4 py-2">REMARKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2" rowSpan="2">ITEM</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">PET Chips</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
              <td className="border px-4 py-2">00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1">
        <img src="Product2.jpg" alt="Product" className="w-full" />
      </div>
    </div>
  );
};

export default ProductDetails1;
