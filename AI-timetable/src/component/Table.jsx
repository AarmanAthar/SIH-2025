import React, { useEffect, useState } from 'react'

const Table = () => {
  const [data, setData] = useState([])

  // Fetch data from backend on component mount
  useEffect(() => {
    fetch('http://localhost:4052/tableDataGet')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching data:', err))
  }, [])

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
