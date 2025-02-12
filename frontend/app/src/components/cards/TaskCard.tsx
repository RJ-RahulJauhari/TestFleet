import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress";


const TaskCard = () => {
  return (
    <div>
      <Card className="min-w-[300px]">
          <Progress value={30}></Progress>

          <CardHeader>
            <div className="flex flex-row justify-between items-center">
              <CardTitle>Task Name</CardTitle>
              <Badge className="w-fit rounded-full ">Status</Badge>
            </div>
            <CardDescription>Task Description</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p>Total Job Count: 98</p>
              <p>Client Servers</p>
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button className="w-full">View Task</Button>
            <Button className="w-full">Metrics</Button>

          </CardFooter>
        </Card>

    </div>
  )
}

export default TaskCard
