import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Knowledges from './component/Knowledges';
import Project from './component/Project';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact from './component/Contact';
import Avis from './component/Avis';
import { useState } from 'react';
import OpinionList from './component/opinionList';


function App() {
const[donnee, updatedonnees]=useState([])

const Ajouteravis=(info)=>{
  updatedonnees([...donnee, info])

}
console.log(donnee)

  return (
    <div className="App">
    
     <Router>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projet' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/competence' element={<Knowledges/>}/>
      <Route path='/avis' element={<Avis updatedonnees={updatedonnees}/>}/>
      <Route path='/list' element={<OpinionList updatedonnees={donnee}/>}></Route>
     
     </Routes>
     <div>         </div>
     <div>          </div>
     <Footer/>
     </Router>
     
     
    </div>
  );
}

export default App;
