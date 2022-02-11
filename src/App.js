import Header from './Header.js'
import Main from './Main.js'
import Card from './Card.js'

export default function App() {
  return(
    <div className="container">
      <Header />
      <Main />
      <div className="cards">
        <Card />
      </div>
    </div>
  )
}