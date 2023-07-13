import React from 'react'
import imagewh from './Image/wh.jpg'
import imagelink from './Image/linked.jpg'

function Footer() {
  return (
    <div className='footr'>
   
   
<img src={imagewh} alt='Mon whatsapp' className='wh' style={{display:"inline"}}></img>
 (+1) 438-993-5280 
 <a href='https://www.linkedin.com/in/amghar-youba-809822209/'>
  <img src={imagelink} alt='Mon profil linkedin' className='link'></img></a>
  <p style={{display:"inline-flex",marginLeft:"30px"}}> Adresse mail: amgharyouba9@gmail.com </p>
  <p style={{display:"inline-flex", marginLeft:"30px"}}><a href='https://github.com/gitcptyou'>Lien vers github </a></p>
  <p style={{marginTop:"2px"}}> © 2023 Amghar Youba. Tous droits réservés.   </p>
  


    </div>
  )
}

export default Footer