import { useState } from "react" 
import UserList from "./UserList" 
import { Plus } from "lucide-react" 

function AddRoutineForm({ users , setUsers }) {
  const [habit, setHabit] = useState("") 
  const [selectedUser, setSelectedUser] = useState("") 

  const addTask = (e) => {
    e.preventDefault() 
    if (!habit.trim() || !selectedUser) return 

    const updatedUsers = users.map((user) => {
      if (user.id === parseInt(selectedUser)) {
        return {
          ...user,
          tasks: [...user.tasks, { id:Math.floor(Math.random()*20)+1, text: habit, statu: "pending" }],
        } 
      }
      return user 
    }) 

    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers)) 

 
    setHabit("") 
    setSelectedUser("") 
  } 

  return (
    <form onSubmit={addTask}>
      <div className="flex flex-col sm:flex-row md:flex-row items-center justify-center gap-2 mb-8 max-w-5xl mx-auto border-lavender focus:outline-none focus:ring-2 focus:ring-violet bg-lightRose shadow-xl p-3 rounded-lg">
        <input
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          placeholder="Nouvelle routine..."
          className="flex-1 p-3 rounded-md w-full"
        />
        <UserList
          users={users}
          selectedUser={selectedUser}
          onChange={setSelectedUser}
        />
        <button
          type="submit"
          className="bg-violet hover:bg-lavender text-white rounded-md p-3 px-5 ml-3"
        >
          <Plus size={18} />
        </button>
      </div>
    </form>
  ) 
}

export default AddRoutineForm 
