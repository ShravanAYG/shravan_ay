import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchableVideoList from './components/SearchableVideoList';

function App() {
  const [count, setCount] = useState(0)
  const sampleVideos = [
    { id: 1, title: 'React Basics', description: 'Learn React from scratch.' },
    { id: 2, title: 'Advanced React', description: 'Hooks, context, and more.' },
    { id: 3, title: 'Vite Tutorial', description: 'Super fast build tool.' },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
         <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
            <h1>Searchable Video List</h1>
            <SearchableVideoList videos={sampleVideos} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
