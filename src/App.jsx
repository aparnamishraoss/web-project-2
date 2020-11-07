import React from "react";
// import my components 
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./component/Header";
//import Search from "./component/Search";
//import Result from "./component/Result";
// 
import information from "./information.json";


 export default function App() {
  console.log(information);
  // const [information,setInformation] = useState([]);
  //useEffect(()) =>{
  //getData();
  
 // },[]);
 // const getData = async () => {
//   const response = await fetch (`https://my.api.mockaroo.com/orders.json?key=e49e6840)
//   const data = await Response.json();
//   setInformation(data);
// };


  return (
    <Router>
    <div className="App">
    <Header />
   
    </div>
    </Router>
   );
    }
