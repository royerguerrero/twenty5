import RecommendedSong from "../components/RecommendedSong"
import Configuration from "../components/Configuration"
import SupportUs from "../components/SupportUs"
import Timer from "../components/Timer"
import Tasks from "../components/Tasks"

import Logo from "../assets/logo.svg"

import "../assets/pages/Pomodoro.css"


const Pomodoro = () => {
  return (
    <div className="pomodoro">
      <header className="pomodoro__header">
        <div className="pomodoro__branding">
          <img className="pomodoro__logo" src={Logo} alt="The best app for improve your productivity" />
        </div>
        <div className="pomodoro__user_and_configuration">
          <p className="pomodoro__greeting">👋 Welcome, Bikatti</p>
          <Configuration />
        </div>
      </header>
      <main className="pomodoro__content">
        <Timer />
        <Tasks />
      </main>
      <footer className="pomodoro__footer">
        <SupportUs />
        <RecommendedSong />
      </footer>
    </div>
  )
}

export default Pomodoro
