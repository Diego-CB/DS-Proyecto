import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Proyecto Final</h1>
      <div>
        <aside>
          <form onSubmit={{}}>
            <div>
              <label>
                Claim:
                <input
                  type="text"
                  name="claim"
                />
              </label>
            </div>
            <div>
              <label>
                Claim type:
                <input
                  type="text"
                  name="claimType"
                />
              </label>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </aside>
      </div>
    </>
  )
}

export default App
