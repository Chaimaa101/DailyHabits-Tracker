import { useState } from "react";
import AddRoutineForm from "./AddRoutineForm";
import "./index.css";
import UserCart from "./UserCart";

function App() {
  const employees = [
    {
      id: 1,
      nom: "Chaimaa",
      picture: "/assets/chaimaa.jpg",
      tasks: [
        { id: 101, text: "Prepare project ", statu: "pending" },
        { id: 102, text: "Fix login page", statu: "done" },
        { id: 103, text: "Pull requests", statu: "pending" },
      ]
    },
    {
      id: 2,
      nom: "Latifa",
      picture: "/assets/latifa.jpg",
      tasks: [
        { id: 201, text: "Design page mockup", statu: "pending" },
        { id: 202, text: "Update product ", statu: "done" },
        { id: 203, text: "Test process", statu: "pending" },
      ]
    },
    {
      id: 3,
      nom: "Rania",
      picture: "/assets/rania.jpg",
      tasks: [
        { id: 301, text: "User interviews", statu: "pending" },
        { id: 302, text: "Feedback results", statu: "done" },
        { id: 303, text: "Create report", statu: "pending" },
      ]
    },
    {
      id: 4,
      nom: "Salma",
      picture: "/assets/salma.jpg",
      tasks: [
        { id: 401, text: "Set up database ", statu: "pending" },
        { id: 402, text: "Monitor server ", statu: "done" },
        { id: 403, text: "Update security ", statu: "pending" },
      ]
    },
  ];

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(employees));
  }

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users"))
  );

  const check = (id) => {
  
     const updatedUsers = users.map(user => ({
      ...user,
      tasks: user.tasks.map(task =>
        task.id === id ? { ...task, statu: "done" } : task
      )
    }));

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const remove = (id) => {
    const updatedUsers = users.map(user => ({
      ...user,
      tasks: user.tasks.filter(task => task.id !== id)
    }));
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const cancel = (id) => {

    const updatedUsers = users.map(user => ({
      ...user,
      tasks: user.tasks.map(task =>
        task.id === id ? { ...task, statu: "pending" } : task
      )
    }));
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <h1 className="text-3xl text-center m-6 underline text-white/80">
        Daily Habits Tracker
      </h1>
      <AddRoutineForm users={users} setUsers={setUsers} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-6 lg:grid-cols-4">
        {users.map((user) => (
          <UserCart
            key={user.id}
            user={user}
            check={check}    
            remove={remove}    
            cancel={cancel}     
          />
        ))}
      </div>
    </>
  );
}

export default App;
