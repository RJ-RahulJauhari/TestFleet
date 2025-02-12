import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ScriptDeploymentAccordion = ({ scriptName, status, deployedOn, servers, version }) => {
  return (
    <Accordion type="single" collapsible className="w-full shadow-md rounded-2xl border border-gray-300">
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-4">
          <div className="flex justify-between w-full items-center">
            <div>
              <h3 className="text-xl font-bold">{scriptName}</h3>
              <p className="text-sm text-gray-500">Version: {version}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Card className="border-none shadow-none">
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-medium">Deployed On:</p>
                <p className="text-gray-600">{deployedOn}</p>
              </div>
              <Badge variant={status === "Active" ? "default" : "destructive"}>{status}</Badge>

              <div>
                <p className="text-gray-700 font-medium mb-1">Servers:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {servers.map((server, index) => (
                    <li key={index}>{server}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Edit Deployment</Button>
              <Button variant="destructive">Delete Deployment</Button>
            </CardFooter>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ScriptDeploymentAccordion;
