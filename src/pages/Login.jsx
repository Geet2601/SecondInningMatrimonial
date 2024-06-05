import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


const URL = "http://localhost:5000/api/auth/login"

export const Login = () => {
const [user, setUser] = useState({
    email:"",
    password:""
});

const Navigate = useNavigate();
const {storeTokenInLS} = useAuth();

const handleInput= (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
+-
    setUser({
        ...user,
        [name]:value,
    })
};
const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const response= await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user),
        });

        console.log("login form", response );

    if(response.ok) {
        alert("Login Successful")
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: ""}); 
        Navigate("/");
    } else {
        alert("invalid credential")
        console.log("invalid credential");
    }
    
    } catch (error) {
        console.log(error);
    }      
};  
return (
<>
<section>
<main className="main">
<div className="section-registeration">
<div className = "container grid grid-two-cols">
<div className="registeration-image">
<img src="/image/touch_9526479.png" alt="" />
</div>
<div className="registeration-form"><h1 className="main-heading mb-3">Already have an account?<br/> Login here</h1>
<br />
<form onSubmit={handleSubmit}>

<div>
<label htmlFor="email">Enter Your Email </label>
<input 
type="text" name="email"  
placeholder="Email"
id="email"
required
autoComplete="off"
value={user.email}
onChange={handleInput}
/>
</div>
<div>
<label htmlFor="password">Enter Password</label>
<input 
type="password" name="password"  
placeholder="Enter Password"
id="password"
required
autoComplete="off"
value={user.password}
onChange={handleInput}
/>
</div>
<br/>
<button type="submit" className="btn btn-submit">Log in</button>
<br /><br />
<div>Forgot Password?</div>
</form>
</div>
</div> 
</div>
</main>
</section>  
</>
)
};