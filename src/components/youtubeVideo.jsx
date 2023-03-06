const YoutubeVideo = ({embedId}) => {
    return (
    <div style={{width:"auto"}}>
        <iframe
            width="400"
            height="200"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
    )
}
export default YoutubeVideo