import activities from './images/activities.jpg'

export default function Main() {
  return(
    <main className="main">
      <img className="main__img" src={activities} alt="Pictures with different activities"/> 
      <h1 className="main__header">Online Experiences</h1>
      <p className="main__text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </main>
  )
}