import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Categories from './pages/Categories.jsx';
import Terms from './pages/Terms.jsx';
import More from './pages/More.jsx';
import './style/App.css'

function App() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Jura" />
      <Header/>
        <main>
          <Routes>
            <Route index element={<Categories/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/more" element={<More/>}/>  
          </Routes>
        </main>
      <Footer/>
    </>
  )
}

export default App
