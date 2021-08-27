import { PlusIcon, TrashIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import { CSVtoJSON } from "../utils";

export default function SectionHeaderBar({ heading, onImport, onDelete }) {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    multiple: false,
    accept: ".csv",
  });

  function handleData(onImport, filesContent) {
    if (errors) errors.forEach((e) => console.log(e));
    if (loading || !filesContent.length) return;

    const csv = filesContent.map((file, _) => file.content).join("");
    const json = CSVtoJSON(csv);

    onImport(JSON.parse(json));
  }

  useEffect(() => {
    handleData(onImport, filesContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, errors]);

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-gray-500 font-bold text-2xl ml-1">{heading}</h1>
      <div className="flex gap-x-4">
        <button
          className="flex items-center justify-between bg-green-500 px-4 gap-x-2 py-2 text-white rounded"
          onClick={openFileSelector}
        >
          Import
          <PlusIcon className="h-6 w-6"></PlusIcon>
        </button>
        <button
          className="flex items-center justify-between bg-red-500 px-4 gap-x-2 py-2 text-white rounded"
          onClick={() => {
            onDelete();
          }}
        >
          Delete
          <TrashIcon className="h-6 w-6"></TrashIcon>
        </button>
      </div>
    </div>
  );
}
