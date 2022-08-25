import React, { useState } from 'react'

function GifSearch({updateSearch}){

    const [ search, setSearch ] = useState("")

    function handleChange(e){
        setSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        updateSearch(search)
    }

    return (
        <div>
            <form style={{display:"flex", flexDirection:"column", margin: "15px"}} onSubmit={handleSubmit}>
                <label>Enter a search term: </label>
                <input value={search} onChange={handleChange} type="text"></input>
                <button type="submit">Find Gifs</button>
            </form>
        </div>

    )
}
export default GifSearch