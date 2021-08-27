import React from "react";

export default function Table({ data, columns, headers }) {
  // console.log(data[0]["Monday"]);
  return (
    <div className="flex rounded-md  md:max-h-table sm:max-h-56 overflow-y-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={header + i}
                className="bg-gray-300 text-left text-gray-600 sticky top-0 px-3 py-2"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.ID + index}
              className={`text-gray-600 bg-opacity-20 ${
                index % 2 === 1 ? "bg-gray-300" : ""
              }`}
            >
              <td className="px-3 py-2">{index + 1}</td>

              {columns.map((column, index) => (
                <td className="px-3 py-2">{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
