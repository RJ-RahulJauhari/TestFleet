import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { VIEW_SCRIPT_ROUTE } from "@/constants/NavigateConstants";

const ScriptCard = ({ id, scriptName, description, fileType, fileSize, onEdit, onDelete }) => {
  return (
    <Card className="w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle>{scriptName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">Type: {fileType}</p>
        <p className="text-sm text-gray-500">Size: {(fileSize / 1024).toFixed(2)} KB</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <NavLink to={`${VIEW_SCRIPT_ROUTE}/${id}`}><Button variant="outline" onClick={onEdit}>Edit</Button></NavLink>
        <Button variant="destructive" onClick={onDelete}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default ScriptCard;