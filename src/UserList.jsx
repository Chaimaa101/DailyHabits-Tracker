

function UserList({users, selectedUser,onChange}) {
  
  return (
    <>
    <select 
        name="user" 
        value={selectedUser}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 px-7 border-2 border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-violet ml-2 sm:px-2
"
      >
        <option>Select User</option>
         {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.nom}
        </option>
      ))}
      </select>
    </>
  )
}

export default UserList
