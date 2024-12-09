import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.linkedin.com/in/leonardo-amado-brito/" target="_blank">
          <img src="/linkedin.svg" className="logo" alt="Linkedin logo" />
        </a>
        <a href="https://github.com/leobt23" target="_blank">
          <img src="/github.svg" className="logo" alt="Github logo" />
        </a>
        <a href="https://github.com/leobt23" target="_blank">
        <img src="/cv2.svg" className="logo" alt="CV logo" />
        </a>
      </div>
    </div>
  )
}

export default App
