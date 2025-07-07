import Navigation from "./components/Navigation"
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-800 p-5 text-white scroll-m-0">
      <Navigation/>
      <MainRoute/>
    </div>
  )
}

export default App