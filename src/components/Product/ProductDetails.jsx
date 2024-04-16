import React from "react";

const ProductDetails = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-center mb-4 bg-green-500 text-white p-2 mx-10">Polyester Chips</h2>

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
              <td className="border px-4 py-2">SD</td>
              <td className="border px-4 py-2">SD</td>
              <td className="border px-4 py-2">SD Recycle</td>
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
          <img src="Product1.jpg" alt="Product" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
