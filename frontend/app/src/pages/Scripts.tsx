import ScriptCard from "@/components/cards/ScriptCard";
import UploadScriptModal from "@/components/modals/UploadScriptModal";
import ToolTipIcon from "@/components/ToolTipIcon";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { MdDescription } from "react-icons/md";

const Scripts = () => {

  const [scripts,setScripts] = useState([1,2,3,4,5]);
  const handleEdit = () => alert("Edit clicked");
  const handleDelete = () => alert("Delete clicked");
  return (
<div className="page">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Scripts</h1>
          <p className="mt-3">Manage your scripts here...</p>
        </div>
        <Dialog>
          <DialogTrigger>
            <ToolTipIcon icon={<MdDescription size={30} />} tooltip="Add a script"></ToolTipIcon>
          </DialogTrigger>
          <UploadScriptModal></UploadScriptModal>

        </Dialog>

      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">

        {
          scripts.map((script,index) => {
            return (
              <ScriptCard
              id="kjbfeui928374un234y723yeh7"
              scriptName="Data Processor"
              description="A script for processing data files efficiently."
              fileType="application/javascript"
              fileSize={2048}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
            )
          })
        }

      </div>
    </div>
  )
}

export default Scripts
