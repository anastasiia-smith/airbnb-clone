import Header from './Header.js'
import Main from './Main.js'
import Card from './Card.js'
import data from './data.js'

export default function App() {
  const dataCards = data.map(item => {
      return <Card 
              key={item.id}
              img={item.coverImg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              title={item.title}
              description={item.description}
              price={item.price}
              openSpots={item.openSpots}
            />
      
  })
  return(
    <div className="container">
      <Header />
      <Main />
      <div className="cards">
        {dataCards}
      </div>
    </div>
  )
}