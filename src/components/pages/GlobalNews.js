import React, {useEffect, useState} from 'react'
import {newsClient, weatherClient} from '../../app/apiClients';

const GlobalNews = () => {
    const [localNews,setLocalNews] = useState(null);
    
    useEffect(() => {
        newsClient.get('/search', {
          //countries: 'ug',
          q: 'business',
          //category: 'business',
          
        }).then((response)=>{
          console.log(response.data.articles)
          setLocalNews(response.data.articles)
        })
      
        
      }, [])
  
      if(!localNews) return null
  
  return (
    <div>GlobalNews</div>
  )
}

export default GlobalNews