
import { IoCreateOutline } from "react-icons/io5";
import ToolTipIcon from "@/components/ToolTipIcon";
import TaskCard from "@/components/cards/TaskCard";
import { useNavigate } from "react-router";
import { CREATE_TASK_ROUTE } from '@/constants/NavigateConstants'





const Task = () => {

  const navigate = useNavigate()
  return (
    <div className="page">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Tasks</h1>
          <p className="mt-3">Create tasks and start testing your application...</p>
        </div>
        <ToolTipIcon icon={<IoCreateOutline onClick={() => { navigate(CREATE_TASK_ROUTE)}} size={30} ></IoCreateOutline>} tooltip="Create a Task"></ToolTipIcon>

      </div>
      <div className="flex flex-row gap-2 mt-4">
        <TaskCard></TaskCard>

      </div>
    </div>
  )
}

export default Task
