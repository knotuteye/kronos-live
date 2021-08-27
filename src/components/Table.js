export default function Table({ data, columns, headers }) {
  return true ? (
    <div
      style={{ maxHeight: "calc(100vh - 20rem)" }}
      className="flex rounded-md sm:max-h-56 overflow-y-auto w-full"
    >
      <table
        className="whitespace-nowrap overflow-x-auto"
        style={{
          width: "calc(100% - 5rem)",
        }}
      >
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
        <tbody className="w-full">
          {data.map((item, index) => (
            <tr
              key={item.ID + index}
              className={`text-gray-600 bg-opacity-20 ${
                index % 2 === 1 ? "bg-gray-300" : ""
              }`}
            >
              <td className="px-3 py-2">{index + 1}</td>

              {columns.map((column, index) => (
                <td key={column["ID"] + index} className="px-3 py-2">
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="flex rounded-md  md:max-h-table sm:max-h-56 overflow-y-auto w-full">
      <div></div>
    </div>
  );
}
