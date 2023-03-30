import '../assets/components/RecommendedSong.css'

const RecommendedSong = () => {
  return (
    <div className="recommended-song">
      <div className="recommended-song__header">
        <h2 className="recommended-song__heading">recommended song</h2>
        <div className="recommended-song__platforms">
          <a className="recommended-song__platform-link" href="">Spotify</a>
          <a className="recommended-song__platform-link" href="">Apple Music</a>
        </div>
      </div>
      <div className="recommended-song__card">
        <div className="recommended-song__cover-wrapper">
          <img className="recommended-song__cover" src="" alt="" />
        </div>
        <div className="recommended-song__information">
          <h3 className="recommended-song__name">
            Slow Jamz<span className="recommended-song__is-explicit">E</span>
          </h3>
          <h4 className="recommended-song__artist">
            Kanye West, Twista, Jamie Foxx
          </h4>
        </div>
      </div>
    </div>
  )
}

export default RecommendedSong
