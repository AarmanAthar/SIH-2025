import { useState } from 'react'
import Courses from './component/Courses'
import Table from './component/Table'
import Navbar from './component/Navbar/Navbar.jsx'
function App() {
  return (
    <>
    <Navbar/>
    <Courses/>
    <Table/>
    </>
  )
}

export default App
