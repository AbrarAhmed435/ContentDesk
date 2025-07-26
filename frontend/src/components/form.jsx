import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try{
        const res=await api.post(route,{username,password});
        if(method==='login'){
            localStorage.setItem(ACCESS_TOKEN,res.data.access);
            localStorage.setItem(REFRESH_TOKEN,res.data.REFRESH);
            navigate('/');
        }else{
            navigate('/login');
        }
    }catch(err){

    }finally{
        setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{name}</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">{name}</button>
      </form>
    </div>
  );
}

export default Form;