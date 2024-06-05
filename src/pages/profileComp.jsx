import { useState } from "react";

export const ProfileComponent = () => {
const [age, setAge] = useState(25);

const [user, setUser] = useState({
    Fullname:"",
    age: age,
    religion:"",
    Gender:"",
    height:"",
    weight:"",
    caste:"",
    subcaste:"",
    complexion:"",
    bloodtype:"",
    disabilities:"",
    disabilityExplain:"",
    annualincome:"",
    assets:"",
    previousmarriages:"",
    mobno:"",
    secmobno:"",
    basedIn:"",
    
})
const handleAgeChange = (e) => {
setAge(parseInt(e.target.value));
}; // Added closing brace here

const handleInput= (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]:value,
    })
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
    
    
    const response= await fetch(`http://localhost:5000/api/form/completeprofile`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(user),
    });
    
    console.log(response);
    }catch (error) {
        console.log("registeration" , error);
    }
    // if(user.password !== user.confirmPassword) {
    // alert("Password does not match");
    // return;
    // }
    };
return (
<>
<section>
<main className="main">
<div className="section-registeration">
<div className="container grid ">
<div className="registeration-form">
<h1 className="main-heading mb-3">
Complete Your Profile and Find the best matches for you.
</h1>
<br />
<form onSubmit={handleSubmit}>
    <div className="grid-two-cols">
        <div>

<div>
    <label htmlFor="Fullname">
        Your Full Name
    </label>
    <input 
        type="text" 
        name="Fullname"
        placeholder="Type your Full Name here" 
        id="Fullname" 
        required
        autoComplete="off"
        value={UserActivation.Fullname}
        onChange={handleInput} 
        />
</div>
<div>
    <label htmlFor="age">
        Age
    </label>
    <input
        type="range"
        id="age"
        name="age"
        min="18"
        max="100"
        value={user.age}
        onChange={handleInput}
        />
    <p>{user.age}</p>
    {/* Display current age value */}
</div>
<div>
    <label htmlFor="Gender">Gender</label>
    <select name="Gender" id="Gender"
    required
    value={user.Gender}
    onChange={handleInput}>
        <option value="">Select Your Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
</div>
<div>
    <label htmlFor="height">
        Height (feet)
    </label>
    <input
        type="range"
        id="height"
        name="height"
        min="3"
        max="8"
        step="0.1"
        value={user.height}
        onChange={handleInput}
        />
    <p>{user.height} feet</p>
    {/* Display current height value */}
</div>

<div>
    <label htmlFor="weight">
        Weight (kgs)
    </label>
    <input
        type="range"
        id="weight"
        name="weight"
        min="40"
        max="300"
        // step="0.01"
        value={user.weight}
        onChange={handleInput}
        />
    <p>{user.weight} Kgs</p>
    {/* Display current height value */}
</div>


<div>
<label htmlFor="religion">Your Religion </label>
    <select 
        name="religion"  
        id="religion"
        required
        value={user.religion}
        onChange={handleInput}
        >
    <option value="">Select Your Religion</option>
    <option value="Hindu">Hindu</option>
    <option value="Muslim">Muslim</option>
    <option value="Sikh">Sikh</option>
    <option value="Christian">Christian</option>
    <option value="Jainism">Jainism</option>
    <option value="Atheist">Atheist</option>
            {/* Add more options as needed */}
        </select>
</div>
<div>
    <label htmlFor="caste"> Caste</label>
    <input type="text" name="caste"
    placeholder="Enter your Caste"
    id="caste"
    autoComplete="off"
    value={user.caste}
    onChange={handleInput} />
</div>
<div>
    <label htmlFor="subcaste"> Subcaste</label>
    <input type="text" name="subcaste"
    placeholder="Enter your Caste"
    id="subcaste"
    autoComplete="off"
    value={user.subcaste}
    onChange={handleInput} />
</div>
<div>
<label htmlFor="complexion">Your Complexion </label>
    <select 
        name="complexion"  
        id="complexion"
        required
        value={user.complexion}
        onChange={handleInput}
        >
    <option value="">Select Your Complexion</option>
    <option value="Fair">Fair</option>
    <option value="Dusky">Dusky</option>
    <option value="Dark">Dark</option>
            {/* Add more options as needed */}
        </select>
</div>
<div>
    <label htmlFor="bloodtype"> Blood Type</label>
    <select name="bloodtype" id="bloodtype" required
    value={user.bloodtype}
    onChange={handleInput}>
         <option value="">Select Your Blood Type</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
    </select>
</div>
    </div>
    <div>
<div>
    <label htmlFor="disabilities">Any Disabilities</label>
    <select name="disabilities" id="disabilities" required
    value={user.disabilities}
    onChange={handleInput}>
    <option value="">Do you have any disabilities</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
    </select>
</div>
{user.disabilities === "Yes" && (
    <div>
        <label htmlFor="disabilityExplain"> What kind of disability do you have?</label>
        <input type="text"
        name="disabilityExplain" 
        placeholder="Please explain your disability"
        id="disabilityExplain" 
        value={user.disabilityExplain}
        onChange={handleInput} />
    </div>
)}

<div>
        <label htmlFor="annualincome"> Annual Income </label>
        <input type="text"
        name="annualincome" 
        placeholder="Please enter your Annual Income"
        id="annualincome"  
        value={user.annualincome}
        onChange={handleInput} />
    </div>
<div>
    <label htmlFor="assets"> What kind of Assets do you have?</label>
    <input type="text"
    name="assets" 
    placeholder="Please explain your Assets"
    id="assets" 
    value={user.assets}
    onChange={handleInput} />
</div>    
<div>
        <label htmlFor="familymembers"> How many family members are there in your family?</label>
        <input type="text"
        name="familymembers" 
        placeholder="Please type how many family members do you have"
        id="familymembers" 
        value={user.familymembers}
        onChange={handleInput} />
    </div>
<div>
    <label htmlFor="previousmarriages">Previously Married? Select the number of times <br /> you were previously married.</label>
    <select name="previousmarriages" id="previousmarriages" required
    value={user.previousmarriages}
    onChange={handleInput}>
    <option value="">Select how many times you were married</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    </select>
</div>
<div>
    <label htmlFor="mobno"> Mobile Number</label>
    <input type="tel" name="mobno"
    placeholder="Mobile Number"
    id="mobno"
    required
    autoComplete="off"
    value={user.mobno}
    onChange={handleInput} />
</div>
<div>
    <label htmlFor="secmobno">Email</label>
    <input type="tel" name="secmobno"
    placeholder="Second Mobile Number"
    id="secmobno"
    required
    autoComplete="off"
    value={user.secmobno}
    onChange={handleInput} />
</div>    

    
<div>
    <label htmlFor="basedIn">
        Based In?
    </label>
    <input type="text" name="basedIn"
    placeholder="City You are based in" 
    id="basedIn"
    required
    autoComplete="off"
    value={user.basedIn}
    onChange={handleInput}/>
</div>
<br />
<button type="submit" className="btn01 btn-submit">Save Profile</button>
</div>
</div>
<br/>
</form>
</div>
</div>
</div>
</main>
</section>
</>    
);
};
