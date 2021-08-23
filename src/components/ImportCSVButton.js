import React from "react";
import { useFilePicker } from "use-file-picker";

export default function ImportCSVButton({ onImport }) {
    let jsonArray;
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        multiple: false,
        accept: '.csv',
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    function csvJSON(csv){

        var lines=csv.split("\n");
      
        var result = [];
      
        var headers=lines[0].split(",");
      
        for(var i=1;i<lines.length;i++){
      
            var obj = {};
            var currentline=lines[i].split(",");
      
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
      
            result.push(obj);
      
        }
      
        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
      }


    function _onClick() {
        // Open Dialog
        openFileSelector()

        if (filesContent.length) {
            jsonArray = csvJSON(filesContent.map((file, _) => file.content));
            console.log(jsonArray);
        }



        // Call onImport
        onImport()
    }

    return <button className="bg-green-500 shadow-md p-3 px-8 text-white rounded-xl font-bold"
        onClick={() => _onClick()}>
        Import CSV
    </button>
}