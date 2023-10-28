import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chart from 'chart.js/auto';
import { LineChart } from '@mui/x-charts/LineChart';
import './App.css'
import { red, green, blue } from '@mui/material/colors';

const customColors = [blue[500]]; // Define los colores personalizados aquí


function App() {
  const [count, setCount] = useState(0)
  const [selectedModelType, setSelectedModelType] = useState('RNN');

  const handleClaimTypeChange = (event) => {
    setSelectedModelType(event.target.value);
  };
  
  const handleSubmit = (e) => {
    console.log('Submit')
  }

  return (
    <div className='app-container'>
      {/* <header className="app-header">
        <h2>Proyecto Final</h2>
      </header> */}
      <div className='flex-container'>
        <aside className='aside-container'>
          
          <form onSubmit={handleSubmit}>
            <div className='title-container'>
              <h2>Welcome to our text evaluation system! </h2>
              <p>Please enter your written work in the box below and choose the type of text from the options provided. </p>
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
            <div className='modeltype-container'>
                <label>
                  <input
                    type="radio"
                    name="selectedModelType"
                    value="RNN"
                    checked={selectedModelType === 'RNN'}
                    onChange={handleClaimTypeChange}
                  />
                  RNN
                </label>
                <label>
                  <input
                    type="radio"
                    name="selectedModelType"
                    value="CNN"
                    checked={selectedModelType === 'CNN'}
                    onChange={handleClaimTypeChange}
                  />
                  CNN
                </label>
                <label>
                  <input
                    type="radio"
                    name="selectedModelType"
                    value="GPT"
                    checked={selectedModelType === 'GPT'}
                    onChange={handleClaimTypeChange}
                  />
                  GPT
                </label>
            </div>
            </div>
            <button className='evaluate-button' type="submit">Evaluate</button>
          </form>
        </aside>
        <div className='main-container'>
          <div className='result-container'>
            <h1>Result:</h1>
            <h1>Effective</h1>
          </div>
          <div className='chart-component'>
            <LineChart 
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              colors={customColors}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
