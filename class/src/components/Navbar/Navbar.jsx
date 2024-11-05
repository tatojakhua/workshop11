import React from 'react'
import routes from '../../constants/routes'
import {useNavigate} from "react-router-dom"

const appRoutes = Object.entries(routes)
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav>
        {appRoutes.map((route)=>{
            const [key, value] = route;
            return <button key={key} onClick={()=> navigate(value)}>{key}</button>
        })}
    </nav>
  )
}

export default Navbar