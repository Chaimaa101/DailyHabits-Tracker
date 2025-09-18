import {  Check, X, Trash2 } from "lucide-react"

function RoutineCard({ task, status, taskId, check, remove, cancel }) {

  return (
     <>
      <div className="flex justify-between items-center bg-white p-2 m-3 rounded-sm  w-64 md:w-52 lg:w-60">
       <p className={`text-gray-800 ${status === "done" ? "line-through text-gray-500" : ""}`}>
        {task}
      </p>
       <div className='float-right space-x-2'>
         {status === "pending" ? (
          <>
            <button className="bg-gren p-2 rounded-md text-black hover:bg-green-400" onClick={() => check(taskId)}>
              <Check className="w-4 h-4" />
            </button>
            <button className="bg-redd p-2 rounded-md text-white hover:bg-red-500" onClick={() => remove(taskId)}>
              <Trash2 className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
          <button className="bg-yelow p-2 rounded-md hover:bg-yellow-500 text-black" onClick={() => cancel(taskId)}>
            <X className="w-4 h-4" />
          </button>
           <button className="bg-redd p-2 rounded-md text-white hover:bg-red-500" onClick={() =>remove(taskId)}>
              <Trash2 className="w-4 h-4" />
            </button>
            </>
        )}
      </div>
      </div>    
</>
  )
}

export default RoutineCard
