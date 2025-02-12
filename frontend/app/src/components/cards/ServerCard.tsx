import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Assuming you have a badge component for status
import { Button } from '../ui/button';

const ServerCard = ({ server }) => {
  const [status, setStatus] = useState('Online');

  useEffect(() => {
    // Set the status based on server's isOnline property
    setStatus(server.isOnline ? 'Online' : 'Offline');
  }, [server]);

  const serverStatusColor = status === 'Online' ? 'green' : 'red';

  return (
    <Card className="w-[400px]">
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardTitle>{server.name}</CardTitle>
        <div>
        <CardDescription>
          <Badge className={`ml-2 bg-${serverStatusColor}-600`}>
            {status}
          </Badge>
        </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <p><strong>IP Address:</strong> {server.ip}</p>
        <p><strong>CPU Usage:</strong> {server.cpuUsage}%</p>
        <p><strong>RAM Usage:</strong> {server.ramUsage}%</p>
      </CardContent>

      <CardFooter className='flex flex-row justify-between items-center'>
        <p>Server Details</p>
        <Button>Disconnect Server</Button>
      </CardFooter>
    </Card>
  );
};

export default ServerCard;
