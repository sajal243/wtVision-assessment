// Componet for Sidebar
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({data}) => {
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
            <li style={{color: "white", fontWeight: 600}}>Facilities & Info</li>
            {
            data.map((ele, i) => (<li key={ele.id} ><Link to={`/item/${i}`}>{ele.key}</Link></li>))
            }
            
        </ul>
    </div>
  )
}

export default Sidebar