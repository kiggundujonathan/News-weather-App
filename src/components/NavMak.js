import React ,{useState} from 'react'
import image from "../images/maknews.png"
import  "./Navigation.css"
import DrawerIcon from "./DrawerIcon"
import {newsClient, weatherClient} from '../app/apiClients';



     
const NavMak = ({setCategory}) => {

  const [search, setSearch] = useState('')

  const handleInput = () =>{
    console.log("search results",search);
  };

// search the news
const searchNews = async function (searchQuery) {
  const results = await newsClient.get('/search', {q: searchQuery});

  if (!results.ok) {
    // dispatch to redux to give an error to the client
    return console.log(results.problem);
  }
  if (results.data.status !== 'ok') {
    const err = {error: true, userSearch: results.data.user_input.q};
    console.log(err);
    return err;
  }

  return results.data.articles;
};

  return (
    <div className="nav">
    
      <div className="icon">
     <DrawerIcon setCategory = {setCategory}/>
    </div>
    <img 
    style={{ cursor: "pointer"}}
    src={image}
        height='60px'
        alt='logo'
    />
    
    
    <div className="search">
      <input className='input' type="text"  placeholder="search news" onChange={ event => setSearch(event.target.value)}/>
      <button className='button' onClick={() => searchNews(search)} >Search</button>
    </div>
    
    </div>
  )
}

export default NavMak