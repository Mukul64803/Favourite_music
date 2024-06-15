import React, { useState } from "react"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {name: "In Dino", image:"https://images.unsplash.com/photo-1717201410616-205a82d7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , artist: "Pritam", added: false},
    {name: "Sajni", image:"https://images.unsplash.com/photo-1717160111930-b1a7ba2baf52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , artist: "Jal", added: true},
    {name: "Sajna", image:"https://images.unsplash.com/photo-1716222350384-763cc1ec344a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , artist: "Falak Shabbir", added: false},
    {name: "Hona Tha Pyar", image:"https://images.unsplash.com/photo-1716255254612-c0366e3bc5d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , artist: "Atif Aslam", added: false},
    {name: "Bin-Tere", image:"https://images.unsplash.com/photo-1717034231682-96bde6d558f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , artist: "Vishal Shekhar", added: true},
  ]
  const [Val,SetVal] = useState(data);

  const handleclick = (cardindex)=>{
    SetVal((previous)=>{
      return previous.map((items,index)=>{
        if(index === cardindex){
          return{...items, added:!items.added}
        }
        return items;
      })
    })
  }

  return (
    <div className="">
      <Navbar value={Val}/>
      <div className="flex flex-wrap  items-center">
        {Val.map((obj,index)=>(
          <Cards values={obj} handleclick={handleclick} index={index} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
