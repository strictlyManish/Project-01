import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Mainroutes from './routes/Mainroutes'
function App() {
  return (
    <div className="bg-gray-900 h-screen w-screen px-10 text-white select-none overflow-x-hidden relative">
      <Navbar />
      <Mainroutes/>
    </div>
  );
}

export default App;
