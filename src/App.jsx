
import './App.css'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <>
      <div className='h-screen flex flex-col justify-between'>
        <NavbarComponent />
        <h1></h1>
        <FooterComponent />
      </div>
    </>
  )
}

export default App
