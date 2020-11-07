//React Core 
import React ,{useState} from "react";
 import Result from "./component/Result";

 export default function TrackingPage({match,information}){
     const query = new ReqExp(match.param.query,"i");
     const result = information.filter((item) => item.id.match(query));
     if( result [0]== undefined){

        return(
            <div className="Tracking_Page">
            <h1> Tracking Page</h1>
            <p>Entered Tracking ID is not valid ,Check Again</p>
            </div>
        );
     }else 
     return (
         <div className="Tracking_Page">
         <h1> Tracking Page</h1>
         <Result data ={result[0]}/>
         </div>
     )
 }

