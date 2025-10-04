import React from 'react'

const Courses = () => {
    const handleClick = async (e)=>{
        let data = document.getElementById("course").value
        let time = document.getElementById("time").value
        const res = await fetch('http://localhost:4052/tableData',{
             method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                data: data,
                time: time
            })
        }) 
        console.log("data sent")
    }
   
  return (
    <div>
      <select id="time">
        <option value="none">--Select Time--</option>
        <option value="9-10">9-10</option>
        <option value="10-11">10-11</option>
        <option value="11-12">11-12</option>
        <option value="12-1">12-1</option>
      </select>
      
      <select id="course">
        <option value="none">--Select a Course--</option>
        <option value="Maths">Maths</option>
        <option value="Electrical">Electrical</option>
        <option value="Humanities">Humanities</option>
        <option value="DSA">DSA</option>
        <option value="OOPs">OOPs</option>
      </select>

      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Courses
