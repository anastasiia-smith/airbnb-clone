import Header from './Header.js'
import Main from './Main.js'
import Card from './Card.js'
import data from './data.js'

export default function App() {
  const dataCards = data.map(item => {
      return <Card 
              key={item.id}
              {...item}
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