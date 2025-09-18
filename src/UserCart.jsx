import RoutineList from './RoutineList'

function UserCart({ user, check, cancel, remove}) {
  const completed = user.tasks.filter(task => task.statu === "done").length
    const progress = Math.round((completed / user.tasks.length) * 100)

  return (
    <div >
      
      <div className="bg-white/90 p-6 rounded-md shadow-md flex flex-col items-center text-center">
        <img src={user.picture} alt='No image'  className="rounded-full w-20 h-20 mb-4 border-2 border-lavender" />
        <h2 className="text-lg font-semibold text-violet">{user.nom}</h2>
        <progress value={progress} max="100" className="w-full h-3 mt-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-lightRose [&::-webkit-progress-value]:bg-lavender"></progress>
        <RoutineList   
        user={user}
        check={check}
        cancel={cancel}
        remove={remove}/>
      </div>

   
    </div>
  )
}

export default UserCart
