

function GifList({gifThree}){
    const renderGifs = gifThree.map(gif =>{
        return <li key={gif.id}><img alt={"whatever"} src={gif.images.original.url}/></li>
    })
    return (
        <ul>
            {renderGifs}
        </ul>
    )
}
export default GifList