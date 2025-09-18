import React from 'react'
import RoutineCard from './RoutineCard'

function RoutineList({ user, check, cancel, remove }) {

  return (
    <>
      <div>
    {
      user.tasks.map((task) =>(
        <RoutineCard   key={task.id}
          task={task.text}
          status={task.statu}
          taskId={task.id}
          check={(taskId) => check(taskId)}
          cancel={(taskId) => cancel( taskId)}
          remove={(taskId) => remove(taskId)}/>
      ))
    }
      </div>
    </>
  )
}

export default RoutineList
