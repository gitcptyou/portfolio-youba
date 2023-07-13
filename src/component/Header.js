import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className='divp'>
        <div className='divh1'>Mon Profile</div>
      <div className='divh2'>  <NavLink to='/'>Home</NavLink></div>
        <div className='divh3'> <NavLink to='/projet'>Project</NavLink>   </div>
        <div className='divh4'> <NavLink to='/contact'>Contact</NavLink>   </div>
        <div className='divh5'> <NavLink to='/competence'>Knowledges</NavLink>  </div>
        <div className="divh6"><NavLink to='/avis' >Avis</NavLink> </div>
        <div className="divh7"><NavLink to='/list' >list des opinions</NavLink> </div>
       
       

    </div>

  )
}

export default Header