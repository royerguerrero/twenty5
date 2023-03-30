const RecommendedSong = () => {
  return (
    <div className="recommended-song">
      <h2 className="recommended-song__heading">recommended song</h2>
      <div className="recommended-song__platforms">
        <a href="">Spotify</a>
        <a href="">Apple Music</a>
      </div>
      <div className="recommended-song__card">
        <img className="recommended-song__cover" src="" alt="" />
        <h3>Slow Jamz</h3><span>E</span>
        <h4>Kanye West, Twista, Jamie Foxx</h4>
      </div>
    </div>
  )
}

export default RecommendedSong