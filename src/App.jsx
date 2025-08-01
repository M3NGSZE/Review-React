
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'
import Feedback from './pages/Feedback'
import ListProducts from './pages/ListProducts'

function App() {

  const handleClick = () => {
    alert("Button clicked")
  }

  return (
    <>
      <div className='h-screen flex flex-col justify-between'>
        <NavbarComponent />
        <main className='flex-1 bg-black text-white '>
          
          {/* <ListProducts/> */}
          {/* <Feedback/> */}

          <ButtonComponent title= "Add to Card" onClick={handleClick} className="p-4 bg-red-800 text-white"/>

        </main>
        <FooterComponent />
      </div>
    </>
  )
}

export default App
