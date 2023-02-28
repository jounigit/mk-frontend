import { } from 'react'
import './App.css'
import { useAlbumsData } from './services/apiService'

function App() {
  const albums = useAlbumsData()

  console.log(albums)

  return (
    <div className="App">
      <p>suapa nähä:</p>
        
    </div>
  )
}

export default App
