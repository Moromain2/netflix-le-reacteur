import './App.css'

// Components import
import Header from "./components/Header";
import Section from './components/Section'

// Data import
import data from "./data/data.json"

function App() {
  return (
    <>
      <Header />
      {data.map((obj) => {
        return (
          <Section key={obj.category} title={obj.category} images_array={obj.images} />
        )
      })}
    </>
  )
}

export default App
