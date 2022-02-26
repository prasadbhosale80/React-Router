import { createContext, useReducer } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import Context from "./components/Context";

function Appp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myapps" element={<Navigate replace to={"/learn"} />} />
          <Route path="/learn" element={<Learn />}>
            <Route path="courses" element={<Courses />}>
              <Route path=":courseId" element={<CourseId />} />
            </Route>
            <Route path="bundles" element={<Bundles />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<h1>Nothing Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const myObj={
  name:"",
}

const reducer=(state:any,action:any)=>{ 
  switch (action.type) {
    case 'increment':
        return{
          ...state,
          count:state.count+1,
        }
    default:
        return state
  }
}

const hello=createContext(myObj);
function Home() {
  const myObj={
    name:"Prasad",
  }

  const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <h1>Home</h1>
      <Link to="learn">Learn</Link>
      <hello.Provider value={myObj}>
      <Context/>
      </hello.Provider>
      <button onClick={()=>dispatch({type:"increment"})}>Click Me</button>
      <h1>{state.count}</h1>
    </div>
  );
}
export {hello};

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>Our courses List</h4>
      <Link to="/learn/courses">Courses</Link>
      <Link to="/learn/bundles">Bundles</Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Our Latest Courses</h1>
      <h4>List of Courses</h4>

      <NavLink
        className={({isActive}) => {
          return isActive ? "red-link" : "pink-link";
        }}
        to="/learn/courses/react"
      >
        React
      </NavLink>

      <NavLink
        className={({isActive}) => {
          return isActive ? "red-link" : "pink-link";
        }}
        to="/learn/courses/angular"
      >
        Angular
      </NavLink>

      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Our Latest Bundles</h1>
      <h4>List of Bundles</h4>
    </div>
  );
}

function CourseId() {
  const { courseId } = useParams();
  const navigate=useNavigate();
  return (
    <div>  
      <h1>Url Params is : {courseId}</h1>

      <button onClick={()=>{
        navigate("/dashboard",{state:courseId})
      }}>
        Buy Course
      </button>

      <Link to="/dashboard" state={courseId}>Buy through Link</Link>

    </div>
  );
}

function Dashboard() {
  const location=useLocation();
  return (
    <div>
      <h1>You have choosed : {location.state}</h1>
    </div>
  );
}
export default Appp;
