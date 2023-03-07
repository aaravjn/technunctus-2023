const YoutubeVideo = ({embedId, width, height}) => {
    return (
    <div style={{width:"auto"}}>
        <iframe
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            style={{borderRadius:"10px"}}
        />
    </div>
    )
}
export default YoutubeVideo