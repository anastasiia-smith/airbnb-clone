
import star from './images/star.svg'

export default function Card(props) {
  return(
    <div className='cards__item'>
      <div className="cards__item_status">{props.location}</div>
      <img className="cards__item_image" src={`./images/${props.img}`} alt="Activity" />
      <div className="cards__item_reviews"><img className="star" src={star} alt="Raiting star" />{props.rating} <span>({props.reviewCount}) &#183; {props.location}</span></div>
      <div className="cards__item_description">{props.title}</div>
      <div className="cards__item_price"><b>From ${props.price}</b> / person</div>
    </div>
  )
}