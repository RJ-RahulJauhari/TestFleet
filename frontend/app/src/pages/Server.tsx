import ServerCard from "@/components/cards/ServerCard"

const Server = () => {
  const serverData = {
    name: 'Server 1',
    ip: '192.168.1.10',
    cpuUsage: 45,
    ramUsage: 60,
    isOnline: false,
  };
  return (
    <div className="page">
      <div>
          <h1 className="text-4xl font-semibold">Servers</h1>
          <p className="mt-3">Your client servers are visible here...</p>
        </div>
        <div className="mt-4">
          <ServerCard server={serverData}></ServerCard>
        </div>
    </div>
  )
}

export default Server
