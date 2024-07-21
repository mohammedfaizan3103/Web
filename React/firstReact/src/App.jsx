import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar/>
      <Footer/>
      <div className="cardContainer">
        <Card title="Card 1" description="This is the description of card 1"/>
        <Card title="Card 2" description="This is the description of card 2"/>
        <Card title="Card 3" description="This is the description of card 3"/>
        <Card title="Card 4" description="This is the description of card 4"/>
      </div>
    </>
  )
}

export default App
