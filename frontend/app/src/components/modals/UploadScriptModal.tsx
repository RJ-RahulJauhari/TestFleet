import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const UploadScriptModal = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Script</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="script-name">Script Name</Label>
            <Input id="script-name" placeholder="Enter script name" />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea className="min-h-52" id="description" placeholder="Enter script description" />
          </div>

          <div>
            <Label>Upload Script File</Label>
            <div {...getRootProps({ className: "border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer" })}>
              <input {...getInputProps()} />
              {file ? (
                <div className="space-y-2">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                  <p className="text-sm text-gray-500">Type: {file.type || "N/A"}</p>
                </div>
              ) : (
                <p className="text-gray-500">
                  {isDragActive ? "Drop the file here..." : "Drag & drop your file here or click to browse"}
                </p>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-4">
            <DialogClose>
            <Button variant="outline">Cancel</Button>

            </DialogClose>
          <Button>Upload</Button>
        </DialogFooter>
      </DialogContent>
  );
};

export default UploadScriptModal;