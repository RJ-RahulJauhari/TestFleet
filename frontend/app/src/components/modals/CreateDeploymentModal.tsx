import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog"

import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

const CreateDeploymentModal = ({deployments}) => {
    return (
        <div>
            <DialogContent className="w-full max-w-screen-xl h-auto max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Deployment</DialogTitle>
                    <DialogDescription>
                        Select the <b>scripts</b> you want to deploy and the <b>servers</b> you want to deploy the scripts on, then add a <b>configuration</b> for the scripts...
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <div className=' flex flex-col md:flex-row justify-center gap-3 min-h-[200px]'>
                    <div className='w-full md:w-1/3 p-4 overflow-auto'>
                        <h2 className='text-2xl mb-5'>Scripts</h2>
                        <div className='flex flex-col gap-1'>
                            <Input placeholder='Search for scripts'></Input>
                        </div>
                    </div>
                    <Separator orientation="vertical" className="hidden md:block md:h-auto md:min-h-[100px]" />
                    <div className='w-full md:w-1/3 p-4 overflow-auto'>
                        <h2 className='text-2xl mb-5'>Servers</h2>
                        <div className='flex flex-col gap-1'>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                            </div>
                        </div>
                    </div>
                    <Separator orientation="vertical" className="hidden md:h-auto md:block min-h-[100px]" />

                    <div className='w-full md:w-1/3 p-4 overflow-auto'>
                        <h2 className='text-2xl mb-5'>Configuration</h2>
                        <div className='flex flex-col gap-3'>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="start-time">Start Time</Label>
                                <Input type="time" id="start-time" placeholder="9:30:00" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="end-time">End Time</Label>
                                <Input type="time" id="end-time" placeholder="1, 2, 3..." />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="frequency">Frequency</Label>
                                <Input type="number" id="frequency" placeholder="1, 2, 3..." />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="frequency">Frequency</Label>
                                <Input type="number" id="frequency" placeholder="1, 2, 3..." />
                            </div>
                        </div>
                    </div>
                </div>
                <Separator />
                <DialogFooter>
                    <DialogClose>
                        <Button type="submit">Confirm</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </div>
    )
}

export default CreateDeploymentModal
