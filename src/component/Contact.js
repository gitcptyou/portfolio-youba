import React from 'react'
import imagewh from './Image/wh.jpg'
import imagelink from './Image/linked.jpg'
function Contact() {
  return (
    <div>
Vous pouvez me contacter par whatsapp, Linkedin,Faceebook
<div><img src={imagewh} alt='Mon whatsapp'></img> (+1) 438-993-5280 </div>
<div> <a href='https://www.linkedin.com/in/amghar-youba-809822209/'><img src={imagelink} alt='Mon profil linkedin'></img></a></div>
<div><p> Adresse mail: amgharyouba9@gmail.com </p></div>

    </div>
  )
}

export default Contact