import { BrowserRouter,Routes,Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Post from "./Components/Profile/Post";
const App = () =>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;