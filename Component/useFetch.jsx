import { useState ,useEffect} from "react";

// create a custom hook usefetch , so that it can be used anywhere without writing all the code 
export default function useFetch(){

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

    return {generateProfile,numberOfProfile,setnumberOfProfile,Profile};
}

 