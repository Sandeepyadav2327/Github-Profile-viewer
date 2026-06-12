import { useEffect, useState } from "react";


function Body(){
    const [Profile,setProfile] = useState([]);
    const [numberOfProfile,setnumberOfProfile]=useState("");

    async function generateProfile(count) {
        const start=Math.floor(1+Math.random()*10000);
        const responce= await fetch(`https://api.github.com/users?since=${start}&per_page=${count}`);
        const data= await responce.json();
        console.log("Sandeep");
        console.log(data);
        setProfile(data);
    }
    useEffect(()=>{
        generateProfile(30);
    },[])

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