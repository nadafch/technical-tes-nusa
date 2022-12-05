import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import rocket from "./asset/image 4.svg";

function App() {
  return (
    <div className="bg-black max-w-full">
      <Navbar />
      <div className="w-full flex gap-4 justify-center">
        <img src={rocket} alt="" width={500} />
        <div className="w-1/2 my-auto">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default App;
