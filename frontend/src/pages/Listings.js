import React from 'react'
import {useEffect, useState} from 'react';
import ListingCard from '../components/ListingCard';
import Listings from '../components/ListingCard';




function Home() {

    const [listings, setListings] = useState(null);

    useEffect(()=>{
        const fetchListings = async ()=>{
          const response = await fetch('/api/listings');
          const json = await response.json();
    
          if (response.ok){
              setListings(json);
              
          }
        }

        fetchListings();

    },[]);

  return (
      <>
               {listings && listings.map((listing)=>(
                  <ListingCard key={listing.property_id} listing={listing} />
          ))}
      </>
  )
}

export default Home