
import React,{useState} from "react";
import {Link} from "react-router-dom";

export default function Search() {
    //Reactive Data
    const [query,SetQuery] =useState("");
    

    return(
        <form className="search-form">
        <label htmlFor="trackNumber">Enter Your Tracking Number</label>
      </form> 
      // <input className="search-bar"
    
       // type="text"
       // placeholder="Tracking Number"
       // value={query}
       // onChange={(event) => setQuery(event.target.value)}
       // />
       // <Link to = {`/Result/${query}`}>Submit</Link>

    
    );
}
