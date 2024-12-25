import { Card } from "@/components/ui/card"
import { FileCode2, AlertCircle } from 'lucide-react'

export default function DeveloperChristmas() {
  const commits = [
    { name: "feature.tsx", version: "init", size: "2.4KB", width: "45%" },
    { name: "feature.tsx", version: "修改", size: "2.8KB", width: "55%" },
    { name: "feature.tsx", version: "最终版", size: "3.2KB", width: "65%" },
    { name: "feature.tsx", version: "12.23最终版", size: "3.5KB", width: "75%" },
    { name: "feature.tsx", version: "12.24真最终版", size: "3.6KB", width: "85%" },
    { name: "feature.tsx", version: "12.24定稿版", size: "4.0KB", width: "95%" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8 bg-gray-50">
        <div className="space-y-2 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="text-center sm:text-left mb-2 sm:mb-0">
              <h1 className="text-xl md:text-2xl font-mono font-bold tracking-tight">
                Developer Christmas Tree
              </h1>
              <p className="text-gray-600 mt-1">Merry Christmas</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="font-mono text-sm md:text-base">Keigo</p>
            </div>
          </div>
          <div className="mt-4 text-center sm:text-left">
            <p className="text-gray-600">Best Wishes</p>
            <p className="text-gray-600">祝大家代码无BUG！</p>
            <p className="text-sm text-gray-500">Code Hard Debug Harder</p>
          </div>
        </div>


        <div className="space-y-3 flex flex-col items-center">
          <div
            className="w-[30%] bg-gray-100 rounded-lg p-3 shadow-md transition-all duration-300 hover:scale-105 relative">
            <span className="text-gray-800 font-medium whitespace-nowrap text-[10px] sm:text-sm">
              改好了吗?
            </span>
            <div
              className="absolute top-3 -left-2 w-0 h-0 border-t-[8px] border-r-[8px] border-b-[8px] border-t-transparent border-r-gray-100 border-b-transparent"></div>
          </div>


          <div className="w-full flex flex-col items-center space-y-3">
            {commits.map((commit, index) => (
              <div
                key={index}
                style={{ width: commit.width }}
                className="bg-green-100 rounded-lg p-3 shadow-md flex items-center gap-2 transition-all duration-300 hover:scale-105 relative"
              >
                <FileCode2 className="h-4 w-4 text-green-600 shrink-0" />
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-green-800 font-medium text-[10px] sm:text-sm whitespace-nowrap">
                    {commit.name} {commit.version}
                  </span>
                  <span className="text-green-600 text-[10px] sm:text-sm whitespace-nowrap ml-1 sm:ml-2">
                    {commit.size}
                  </span>
                </div>
                <div className="absolute top-3 -right-2 w-0 h-0 border-t-[8px] border-l-[8px] border-b-[8px] border-t-transparent border-l-green-100 border-b-transparent"></div>
              </div>
            ))}

            <div className="w-[40%] bg-brown-100 rounded-lg p-3 flex items-center justify-center"> <AlertCircle className="h-5 w-5 text-red-500 mr-2" /> <p className="text-red-800 text-xs md:text-sm text-center"> 待code review </p> </div>
          </div>
        </div>

  
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center sm:items-end text-gray-500 text-xs md:text-sm">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <p>localhost:3000</p>
            <p>Development Server</p>
          </div>
          <div className="text-center sm:text-right">
            <p>2024.12.25</p>
            <p>Christmas Day</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

