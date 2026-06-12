import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";


function GithubProfile(){
    // header componet 
    // Body component
    return(
        <>
        
        <Header></Header>
        <Body></Body>
        </>
    )
}









ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);