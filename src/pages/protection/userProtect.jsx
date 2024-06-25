import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth, getId } from "../../firebase/firebase";

export default function STDprotect(props) {
    const {Screen} = props;
    const {id , type} = getId()
    const [loader , setLoader] = useState(true);
    const navigate = useNavigate();
    let user = 'user'
    let checkAuth = () => {
        setLoader(true);

        fbAuth()
        .then((res)=> {
            if(type == user){
                setLoader(false);
            }
            else{
                navigate("/login")
            }
        })
        .catch((err) => {
            setLoader(false);
            navigate("/register");
        })}
        useEffect(() => {
            checkAuth()
        },[]);
  return loader? 
  <>
  Loading....
  </>: 
  <div>
  <Screen/>
  </div>
  
  
}
