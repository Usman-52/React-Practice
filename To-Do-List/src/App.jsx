import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [toName, setToName] = useState("");

  let addToDoList = (event) => {
    event.preventDefault();
    if (toName.trim() === "") {
      alert("⛔ Sorry, You can't Enter an empty value");
    } else if (!toDoList.includes(toName)) {
      setToDoList([...toDoList, toName]);
      setToName("");
    } else {
      alert("🚫 This task is already in the ToDo list");
    }
  };

  let list = toDoList.map((value, index) => (
    <ToDoListItems
      value={value}
      key={value}
      indexNumber={index}
      toDoList={toDoList}
      setToDoList={setToDoList}
    />
  ));

  return (
    <>
      <div className="flex justify-center items-center flex-col" >
        <h1 className="flex justify-center items-center bg-purple-500 w-[800px]  h-11 text-white font-bold">
          To Do List
        </h1>
        <br />

        <form
          onSubmit={addToDoList}
          className="w-[1170px] flex justify-center items-center gap-2"
        >
          <input
            className="w-[530px] h-[38px] pl-2 outline rounded-sm"
            type="text"
            name="toName"
            placeholder="Add Your Task"
            value={toName}
            onChange={(e) => setToName(e.target.value)} 
          />
          <button className="bg-purple-500 text-white font-bold w-[130px] h-[43px] rounded-lg">
            Add
          </button>
        </form>
        <div className=" flex justify-center items-center mt-5">
          <ul className="m-0">{list}</ul>
        </div>
      </div>
    </>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, toDoList, setToDoList }) {
  let deleteRow = () => {
    
    let finalData = toDoList.filter((_, i) => i !== indexNumber);
    setToDoList(finalData);
  };
  
  return (
    <li  className="flex justify-between bg-purple-500 text-white w-[670px]  p-2 mb-4 rounded-md">
      {value}{" "}
      <span onClick={deleteRow} className="cursor-pointer text-xl">
        &times;
      </span>
    </li>
  );
}
