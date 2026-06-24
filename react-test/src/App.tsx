import { useState } from 'react'
import { MonthPicker } from './Components/MonthPicker'
import { LeftArrowButton, RightArrowButton } from './Components/ArrowButton'
import { Dropdown } from './Components/Dropdown'
import { Button } from 'antd'
import { css } from '@emotion/css'

function App() {
  let [value, setValue] = useState('2026-06')
  let [isDarkMode, setIsDarkMode] = useState(false)
  let [d, setD] = useState('1')
  return (
    <>
      <div className={css` padding: 20px; background-color: ${isDarkMode ? '#2A2A2A' : '#FFFFFF'}; `}>
        <div><Button onClick={() => {
          setIsDarkMode(!isDarkMode)
        }}>click</Button></div>
        <div className={css` height: 20px; `}></div>
        <MonthPicker
          width={'220px'}
          value={value}
          isDarkMode={isDarkMode}
          onChange={(res) => setValue(res)}
        ></MonthPicker>
        <div className={css` height: 20px; `}></div>
        <div>
          <Dropdown
            value={d}
            array={['1', '2']}
            width={'220px'}
            isDarkMode={isDarkMode}
            onChange={(res) => setD(res)}>
          </Dropdown>
        </div>
        <div className={css` height: 20px; `}></div>
        <div className={css` display: flex; gap: 15px; `}>
          <LeftArrowButton isDarkMode={isDarkMode} onClick={() => {
            console.log('1')
          }}></LeftArrowButton>
          <RightArrowButton isDarkMode={isDarkMode} onClick={() => {
            console.log('2')
          }}></RightArrowButton>
        </div>
        <div className={css` height: 20px; `}></div>
      </div>
    </>
  )
}

export default App
