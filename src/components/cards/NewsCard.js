import { Divider } from '@material-ui/core';
import React from 'react'
import "./NewsCard.css";
export default function NewsCard({title,SampleImage,body,link,time,author}) {
  return (
    <div className='card-container'>
    <div className="image-container">
      <img
       style={{ cursor: "pointer"}}
       src ={SampleImage}
      alt = ''/>
    </div>
    <div className="card-content">
       <div className="Newscard-title">

      <h3>{title.length>20?`${title.substring(0,20)}...`:title}</h3>

        </div>

    <div className= "card-body">
         
           <p>{body.length>100?`${body.substring(0,100)}...`:body}</p> 
              <div className='time'>
                   <p className=''>{time}</p>
                   <p className=''>{author}</p>
              </div>
    </div>

    </div>
   
    <div className= "btn">
    <button>
        <a href={link}>
           Read More
        </a>
        </button>
    </div>


    </div>
  )
}
