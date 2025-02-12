import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FC } from "react"

interface ToolTipIconProps {
  icon: React.ReactNode; // Expecting a React component or icon as a prop
  tooltip: string; // Tooltip text as a string

}

const ToolTipIcon: FC<ToolTipIconProps> = ({ icon, tooltip}) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="scale-100 cursor-pointer hover:scale-110 transition-all">
              {icon}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default ToolTipIcon
