import "../assets/components/Timer.css"

const Timer = () => {
  return (
    <div className="timer">
      <div className="timer__content">
        <div className="timer__status">Work</div>
        <div className="timer__clock">
          <div className="clock__hand--hour">
            <span className="hand__caption">HH</span>
            <p className="hand__dial">00</p>
          </div>
          <span className="clock__splitter">:</span>
          <div className="clock__hand--minute">
            <span className="hand__caption">MM</span>
            <p className="hand__dial">00</p>
          </div>
          <span className="clock__splitter">:</span>
          <div className="clock__hand--second">
            <span className="hand__caption">SS</span>
            <p className="hand__dial">00</p>
          </div>
        </div>
        <div className="timer__status">Rest</div>
      </div>
      <div className="timer-controls">
        <button className="start">play</button>
        <button className="stop">stop</button>
      </div>
    </div>
  )
}

export default Timer
