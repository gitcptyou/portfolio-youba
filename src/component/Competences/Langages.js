import React, { Component } from 'react'
import progressbar from './progressbar';

export default class componentName extends Component {
    state={
        Langage:[
  {id:1, value: "Java", xp:2},
  {id:2, value: "Javascript", xp:2},
  {id:3, value: "CSS", xp:2},
  {id:4, value: "C sharp", xp:1.5}
        ],
        Framworks:[
            {id:1, value: "React", xp:1},
            {id:2, value: "Bootstrap", xp:1},
            {id:1, value: "Materiele UI", xp:1},
            {id:1, value: "node js", xp:1}
            

        ]
    }
    render() {
        let {Langage,Framworks} = this.state;
        return (
           
            <div className='langaFramworks'>
                <progressbar 
                Langage={Langage}
                className="langagedisplay"
                title="Languages"
                />
                <progressbar />
                
            </div>
        )
    }
}
