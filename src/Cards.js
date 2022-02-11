import cardPic from './images/sport.jpg'

export default function Cards() {
  return(
    <div className="card">
      <div className="card--status">Online</div>
      <img className="card--image" src={cardPic} alt="Activity" />
      <div className="card--reviews">5.0 <span>(6) USA</span></div>
      <div className="card--description">Life lessons with Katie Zaferes</div>
      <div className="card--price"><b>From $136</b> / person</div>
    </div>
  )
}