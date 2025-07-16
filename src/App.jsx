import './App.css'
import spells from './data/spells.json'
import SpellList from './components/SpellList'

function App() {
  return (
    <div className="App">
      <h1>Hechizos Mágicos</h1>
      <SpellList spells={spells} />
    </div>
  )
}

export default App