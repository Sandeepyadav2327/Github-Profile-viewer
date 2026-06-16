import { useEffect, useState } from "react";
import useFetch from "./useFetch";


function Body(){
    
   const {generateProfile,numberOfProfile,setnumberOfProfile,Profile}=useFetch();// custom hook jo banaye the usse call kiye hai 

    return (
        <div className="but">
        <input type="number" placeholder="Enter the number of profile you want to see" className="inpt" value={numberOfProfile}  onChange={(e)=>setnumberOfProfile(e.target.value)}></input>
        <button className="btn2" onClick={()=>generateProfile(Number(numberOfProfile))}>Search Profile</button>

        
        <div className="profiles">
            {
                Profile.map((values)=>{
                    return (
                        <div key={values.id} className="cards">
                        <img src={values.avatar_url}></img>
                        <h2>{values.login}</h2>
                        <a href={values.html_url} target="_blank">Profile</a>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )

}
export default Body;