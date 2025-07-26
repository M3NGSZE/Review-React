
import './App.css'
import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="bg-blue-500 text-white p-4 m-4 rounded-lg">
        <h1 className="text-2xl font-bold">Hello world</h1>
        <p className="text-sm">This should be styled with Tailwind CSS</p>
      </div>
    </>
  )
}

export default App
