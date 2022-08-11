import React from 'react'
import {useEffect, useState} from 'react';

function Home() {

    const [listings, setListings] = useState(null);

    useEffect(()=>{
        const fetchListings = async ()=>{
          const response = await fetch('/api/listings');
          const json = await response.json();
    
          if (response.ok){
              setListings(json);
              console.log(json);
          }
        }

        fetchListings();

    },[]);

  return (

    <div>
        <h1>HOMES</h1>
          {listings && listings.map((listing)=>(
            <p>{listing.address}</p>
          ))}
    </div>
  )
}

export default Home