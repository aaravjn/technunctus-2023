const YoutubeVideo = ({embedId}) => {
    return (
    <div style={{width:"100%", height:"100%"}}>
        <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            style={{height:"100%", width:"100%", borderRadius:"10px"}}
        />
    </div>
    )
}
export default YoutubeVideo