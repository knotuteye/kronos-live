import React from "react";

export default function Table({ data, headers }) {
  return (
    <div className="flex rounded-md  lg:max-h-table sm:max-h-56 md:max-h-96 overflow-y-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
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
              key={item.ID}
              className={`text-gray-600 bg-opacity-20 ${
                index % 2 === 1 ? "bg-gray-300" : ""
              }`}
            >
              <td className="px-3 py-2">{index + 1}</td>

              {headers.map((header, index) =>
                index === 0 ? null : (
                  <td className="px-3 py-2">{item[header.toLowerCase()]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
