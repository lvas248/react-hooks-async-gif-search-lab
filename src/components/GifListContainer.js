import React, { useState, useEffect } from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(){

    const [ gifList, setGifList ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("dolphin") 

    useEffect(()=>{
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Us70wYWaDnnqHFq6PgQYWwXMFYXGBDu9&rating=g`)
      .then(res => res.json())
      .then(data => setGifList(data.data))
    },[searchTerm])

    function updateSearch(search){
        setSearchTerm(search)
    }

    const searchList = gifList.filter( gif =>{
        return gif.title.includes(searchTerm)
    })
    
    const gifThree = gifList.splice(0, 3)
    return (
        <div style={{display:"flex"}}>
            <GifList gifThree={gifThree}/>
            <GifSearch updateSearch={updateSearch} />
        </div>
    )
}

export default GifListContainer