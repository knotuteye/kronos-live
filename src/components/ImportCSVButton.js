import React from "react";
import { useFilePicker } from "use-file-picker";

export default function ImportCSVSection({ onImport }) {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    multiple: false,
    accept: ".csv",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  function csvJSON(csv) {
    let lines = csv.split("\n");
    let result = [];

    let headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      let obj = {};
      let currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

  async function _onClick() {
    // Open Dialog
    openFileSelector();

    if (filesContent.length) {
      let jsonArray = csvJSON(filesContent.map((file, _) => file.content));
      console.log(jsonArray);
    }

    // Call onImport
    onImport();
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center flex-col gap-y-8 items-center px-20 py-16 border-gray-300 rounded-xl border-4 border-dashed -mt-24">
        <p className="text-gray-400">No data was found for this category</p>
        <button
          className="bg-light-blue-500 hover:bg-light-blue-400 shadow hover:shadow-md p-3 px-8 text-white rounded-xl font-bold"
          onClick={() => _onClick()}
        >
          Import File
        </button>
      </div>
    </div>
  );
}
