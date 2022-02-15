
import star from './images/star.svg'

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) badgeText = "Sold out";
  else if (props.location === "Online") badgeText = "Online";
  return(
    <div className='cards__item'>
      {badgeText && <div className="cards__item_status">{badgeText}</div>}
      <div className="cards__item_image"><img src={`./images/${props.coverImg}`} alt="Activity" /></div>
      <div className="cards__item_reviews"><img className="star" src={star} alt="Raiting star" />{props.stats.rating} <span>({props.stats.reviewCount}) &#183; {props.location}</span></div>
      <div className="cards__item_description">{props.title}</div>
      <div className="cards__item_price"><b>From ${props.price}</b> / person</div>
    </div>
  )
}