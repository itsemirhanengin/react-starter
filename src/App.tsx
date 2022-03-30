import React from 'react'
import { Provider } from 'jotai'
import { Routes, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
    <Link to="/">Home</Link>
  </div>
)

const App: React.FC = () => {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Provider>
  )
}

export default App
