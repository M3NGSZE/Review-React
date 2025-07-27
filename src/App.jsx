
import './App.css'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'
import Feedback from './pages/Feedback'
import ListProducts from './pages/ListProducts'

function App() {
  return (
    <>
      <div className='h-screen flex flex-col justify-between'>
        <NavbarComponent />
        <main className='flex-1 bg-black text-white '>
          <ListProducts/>
          <Feedback/>
        </main>
        <FooterComponent />
      </div>
    </>
  )
}

export default App
