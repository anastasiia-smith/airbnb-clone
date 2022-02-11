import cardPic from './images/sport.jpg'
import star from './images/star.svg'

export default function Card() {
  return(
    <div className='cards__item'>
      <div className="cards__item_status">Online</div>
      <img className="cards__item_image" src={cardPic} alt="Activity" />
      <div className="cards__item_reviews"><img className="star" src={star} alt="Raiting star" />5.0 <span>(6) &#183; USA</span></div>
      <div className="cards__item_description">Life lessons with Katie Zaferes</div>
      <div className="cards__item_price"><b>From $136</b> / person</div>
    </div>
  )
}