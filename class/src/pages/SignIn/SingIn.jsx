import React from 'react'
import { useLocation } from 'react-router-dom'

const SingIn = () => {
  const location = useLocation()
  console.log(location);
  
  return (
    <div>
        <h1>Sign In</h1>
        {location?.state?.success && <h1>Congratulation</h1>}
    </div>
  )
}

export default SingIn