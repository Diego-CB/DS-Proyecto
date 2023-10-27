import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chart from 'chart.js/auto';
import { BarChart } from '@mui/x-charts/BarChart';
import './App.css'
import { red } from '@mui/material/colors';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      {/* <header className="app-header">
        <h2>Proyecto Final</h2>
      </header> */}
      <div className='flex-container'>
        <aside className='aside-container'>
          <div className='title-container'>
            <h2>Start </h2>
            <p>Lorem ipsum</p>
          </div>
          <form onSubmit={{}}>
            <div>
              <textarea className='argument-input'
                name="claim"
                placeholder='Write your arguments...'
                id="claim"
                rows="4"  
              ></textarea>
            </div>
            <div className='claimtype-container'>
              <label>
                Claim type:
              </label>
              <select
                  name="selectedClaimType"
                >
                  <option value="Lead">Lead</option>
                  <option value="Position">Position</option>
                  <option value="Claim">Claim</option>
                  <option value="Counterclaim">Counterclaim</option>
                  <option value="Rebuttal">Rebuttal</option>
                  <option value="Evidence">Evidence</option>
                  <option value="Concluding Statement">Concluding Statement</option>
              </select>
            </div>
            <div className='result-container'>
              
            </div>
            <button className='evaluate-button' type="submit">Evaluate</button>
          </form>
        </aside>
        <div className='graph-container'>
          <div className='result-container'>
            <h1>Result</h1>
          </div>
          <BarChart
            xAxis={[
              {
                id: 'barCategories',
                data: ['bar A', 'bar B', 'bar C'],
                scaleType: 'band',
              },
            ]}
            series={[
              {
                data: [2, 5, 3],
              },
            ]}
            width={500}
            height={300}
            colors={red}
          />
        </div>
      </div>
    </div>
  )
}

export default App
