import Navigation from "./components/Navigation"
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-800 text-white p-5 overflow-x-hidden overflow-y-auto">
      <Navigation/>
      <MainRoute/>
    </div>
  )
}

export default App