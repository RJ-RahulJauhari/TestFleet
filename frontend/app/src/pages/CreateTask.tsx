import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import CreateDeploymentModal from '@/components/modals/CreateDeploymentModal'
import DeploymentCard from '@/components/cards/DeploymentCard'



const CreateTask = () => {

    const [deployments,setDeployments] = useState([1,2,3]);


    return (
        <div className='page flex flex-col gap-5'>
            <div className="flex flex-row justify-between ">
                <div>
                    <h1 className="text-4xl font-semibold">Start creating your task...</h1>
                    <p className="mt-3">Select the <b>scripts</b> you want to deploy and the <b>servers</b> you want to deploy the scripts on, then add a <b>configuration</b> for the scripts...</p>
                </div>
            </div>

            <div className='p-4'>
                <h2 className='text-2xl mb-5'>Basic information</h2>
                <div className='flex flex-col gap-2'>
                    <Input required placeholder='Name of the task...'></Input>
                    <Input required placeholder='Short description of task...'></Input>
                </div>
            </div>
            <Separator></Separator>
            <div>
                <Dialog>
                    <div className='flex flex-row justify-end'>
                        <DialogTrigger>
                            <Button className='w-fit'>Create a deployment</Button>
                        </DialogTrigger>
                    </div>
                    <CreateDeploymentModal deployments={deployments}></CreateDeploymentModal>
                </Dialog>
            </div>
            <div className='flex flex-col items-center min-h-[500px] gap-1'>
                {
                    deployments.map((deployment,index) => {
                        return (
                            <DeploymentCard scriptName={"Script for Testing Login Page...S"} status={"Pending"} deployedOn={"Client 3"} servers={["server1, server2"]} version={"4.05v"}></DeploymentCard>
                        )
                    })
                }
            </div>

            <div className='flex flex-col gap-1 md:flex-row justify-between'>
                <Button className='w-full md:w-fit bg-red-600 '>Clear Deployments</Button>
                <Button className='w-full md:w-fit '>Schedule Jobs!</Button>
            </div>

        </div>
    )
}

export default CreateTask
