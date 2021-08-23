import React, { useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import { CSVtoJSON } from "../utils";

export default function ImportCSVSection({ onImport }) {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    multiple: false,
    accept: ".csv",
  });

  function handleData() {
    if (errors) console.log(errors);
    if (loading || !filesContent.length) return;

    onImport(CSVtoJSON(filesContent.map((file, _) => file.content)));
  }

  useEffect(handleData, [loading, errors, filesContent, onImport]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center flex-col gap-y-8 items-center px-20 py-16 border-gray-300 rounded-xl border-4 border-dashed -mt-24">
        <p className="text-gray-400">No data was found for this category</p>
        <button
          className="bg-light-blue-500 hover:bg-light-blue-400 shadow hover:shadow-md p-3 px-8 text-white rounded-xl font-bold"
          onClick={openFileSelector}
        >
          {loading ? "..." : "Import File"}
        </button>
      </div>
    </div>
  );
}
