import { useEffect, useState } from "react";


function Body(){
    const [Profile,setProfile] = useState([]);
    const [number,setNumber]=useState(30);

    async function generateProfile() {
        const responce= await fetch(`https://api.github.com/users?per_page=${number}`);
        const data= await responce.json();
        setProfile(data);
    }
    useEffect(()=>{
        generateProfile();
    },[number])

    return (
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
    )

}
export default Body;