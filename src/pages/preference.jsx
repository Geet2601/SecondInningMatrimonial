import { useState } from "react";
import { useAuth } from "../store/auth";

export const Preferences = () => {
    
const [user, setUser] = useState({
    lowerAge: 18,
    upperAge: 100,
    Gender: "",
    lowerHeight: 3.0,
    upperHeight: 8.0,
    lowerWeight: 40,
    upperWeight: 300,
    religion: "",   
    caste: "",
    subcaste: "",
    complexion: "",
    bloodtype: "",
    lowerAnnualIncome: 0,
    upperAnnualIncome: 100,
    previousMarriages: 0,
    theirCity: ""
});


const { token } = useAuth();

const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
        ...user,
        [name]: name === "lowerHeight" || name === "upperHeight" ? parseFloat(value) : value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
    const response= await fetch(`http://localhost:5000/api/form/preference`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(user),
    });
    
    const data = await response.json();
            console.log(data);
    if(response.ok) {
        window.location.href = "/matches";
    }
        } catch (error) {
        console.log("preference" , error);
    }
};


const statesData = [
    {
        state: "Andhra Pradesh",
        cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry"]
    },
    {
        state: "Arunachal Pradesh",
        cities: ["Itanagar", "Naharlagun"]
    },
    {
        state: "Assam",
        cities: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia"]
    },
    {
        state: "Bihar",
        cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"]
    },
    {
        state: "Chhattisgarh",
        cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Raigarh", "Durg"]
    },
    {
        state: "Goa",
        cities: ["Panaji", "Margao", "Vasco da Gama"]
    },
    {
        state: "Gujarat",
        cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"]
    },
    {
        state: "Haryana",
        cities: ["Faridabad", "Gurugram", "Hisar", "Panipat", "Ambala", "Yamunanagar"]
    },
    {
        state: "Himachal Pradesh",
        cities: ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu", "Bilaspur"]
    },
    {
        state: "Jammu and Kashmir",
        cities: ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Sopore", "Kathua"]
    },
    {
        state: "Jharkhand",
        cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Hazaribagh", "Deoghar"]
    },
    {
        state: "Karnataka",
        cities: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davanagere"]
    },
    {
        state: "Kerala",
        cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha"]
    },
    {
        state: "Madhya Pradesh",
        cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar"]
    },
    {
        state: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"]
    },
    {
        state: "Manipur",
        cities: ["Imphal"]
    },
    {
        state: "Meghalaya",
        cities: ["Shillong"]
    },
    {
        state: "Mizoram",
        cities: ["Aizawl"]
    },
    {
        state: "Nagaland",
        cities: ["Kohima", "Dimapur"]
    },
    {
        state: "Odisha",
        cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri"]
    },
    {
        state: "Punjab",
        cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"]
    },
    {
        state: "Rajasthan",
        cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur"]
    },
    {
        state: "Sikkim",
        cities: ["Gangtok"]
    },
    {
        state: "Tamil Nadu",
        cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"]
    },
    {
        state: "Telangana",
        cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam"]
    },
    {
        state: "Tripura",
        cities: ["Agartala"]
    },
    {
        state: "Uttar Pradesh",
        cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut"]
    },
    {
        state: "Uttarakhand",
        cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Kashipur", "Rishikesh"]
    },
    {
        state: "West Bengal",
        cities: ["Kolkata", "Howrah", "Asansol", "Siliguri", "Durgapur", "Bardhaman"]
    }
];

return (
<>
<section>
<main className="main">
<div className="section-registeration">
<div className="container grid ">
<div className="registeration-form">
<h1 className="main-heading mb-3">
What are you looking for? <br />Find the best matches by filling in your preferences
</h1>
<br />  
<form onSubmit={handleSubmit}>
    <div className="grid-two-cols">
        <div>

{/* <div>
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
</div> */}
<div>
    <label htmlFor="age">
        Your Preferred Age Range?
    </label>
    <input
        type="number"
        id="lowerAge"
        name="lowerAge"
        min="18"
        required
        max="100"
        value={user.lowerAge}
        onChange={handleInput}
        />
        <span> to </span>
        <input 
        type="number"
        id="upperAge"
        name="upperAge"
        required
        min="18"
        max="100"
        value={user.upperAge}
        onChange={handleInput}
        />
</div>
<div>
    <label htmlFor="Gender">should be of Gender </label>
    <select name="Gender" id="Gender"
    required
    value={user.Gender}
    onChange={handleInput}>
        <option value="">Select the Gender you are attracted to</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
</div>
<div>
    <label htmlFor="heightRange">
        of Height (feet)
    </label>
    <input
        type="number"
        step="0.1"
        id="lowerHeight"
        name="lowerHeight"
        required
        min="3.0"
        max="8.0"
        value={user.lowerHeight}
        onChange={handleInput}
        />
        <span> to </span>
        <input 
        type="number"
        step="0.1" 
        id="upperHeight"
        name="upperHeight"
        required
        min="3.0"
        max="8.0"
        value={user.upperHeight}
        onChange={handleInput}  />
    </div>
<div>
    <label htmlFor="weightRange">
        and of Weight (kgs)
    </label>
    <input
        type="number" 
        id="lowerWeight"
        name="lowerWeight"
        min="40"
        max="300"
        // step="0.01"
        value={user.lowerWeight}
        onChange={handleInput}
        />
        <span>to </span>
        <input type="number" name="upperWeight" id="upperWeight" 
        min="40"
        max="300"
        required
        value={user.upperWeight}
        onChange={handleInput}
        />
</div>


<div>
<label htmlFor="religion">Should follow Religion </label>
    <select 
        name="religion"  
        id="religion"
        required
        value={user.religion}
        onChange={handleInput}
        >
    <option value="">Select Your Preferred Religion</option>
    <option value="Hindu">Hindu</option>
    <option value="Muslim">Muslim</option>
    <option value="Sikh">Sikh</option>
    <option value="Christian">Christian</option>
    <option value="Jainism">Jainism</option>
    <option value="Atheist">Atheist</option>
    </select>
</div>
<div>
    <label htmlFor="caste"> Should be of Caste</label>
    <input type="text" name="caste"
    placeholder="Enter your preferred Caste"
    id="caste"
    autoComplete="off"
    value={user.caste}
    onChange={handleInput} />
</div>
</div>
<div>
<div>
    <label htmlFor="subcaste">and their Subcaste should be</label>
    <input type="text" name="subcaste"
    placeholder="subcaste they should belong to"
    id="subcaste"
    autoComplete="off"
    value={user.subcaste}
    onChange={handleInput} />
</div>
<div>
    <label htmlFor="complexion">Looking for Someone who is </label>
    <select 
        name="complexion"  
        id="complexion"
        required
        value={user.complexion}
        onChange={handleInput}
        >
    <option value="">Select your preferred Complexion</option>
    <option value="Fair">Fair</option>
    <option value="Dusky">Dusky</option>
    <option value="Dark">Dark</option>
            {/* Add more options as needed */}
    </select>
</div>
<div>
    <label htmlFor="bloodtype">Should belong to the Blood Type of</label>
    <select name="bloodtype" id="bloodtype" required
    value={user.bloodtype}
    onChange={handleInput}>
    <option value="">Select Blood Type</option>
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
   
<div>
    <label htmlFor="someonedisabilities">Someone with Disabilities ?</label>
    <select name="someonedisabilities" id="someonedisabilities" required
    value={user.someonedisabilities}
    onChange={handleInput}>
    <option value="">Do they have any disabilities?</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
    </select>
</div>
{/* {user.disabilities === "Yes" && (
    <div>
        <label htmlFor="disabilityExplain"> What kind of disability do you have?</label>
        <input type="text"
        name="disabilityExplain" 
        placeholder="Please explain your disability"
        id="disabilityExplain" 
        value={user.disabilityExplain}
        onChange={handleInput} />
    </div>
)} */}

<div>
    <label htmlFor="annualincome"> Their Annual Income should be  </label>
    <input type="number"
    name="lowerAnnualIncome" 
    placeholder="Annual Income in lakhs"
    id="lowerAnnualIncome"  
    value={user.lowerAnnualIncome}
    onChange={handleInput} 
    />
    <span> to </span>
    <input type="number"
    name="upperAnnualIncome"
    placeholder="Max Annual income your partner should earn"
    id="upperAnnualIncome"
    value={user.upperAnnualIncome}
    onChange={handleInput}
    />
</div>    
<div>
    <label htmlFor="previousMarriages">How many relationships do you prefer your spouse to have been in?</label>
    <select name="previousMarriages" id="previousMarriages" required
    value={user.previousMarriages}
    onChange={handleInput}>
    <option value="">Select how many times you wish your spouse was married</option>
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
<label htmlFor="theirCity">Based In?</label>
    <select
    name="theirCity"
    id="theirCity"
    required
    onChange={handleInput}
    value={user.theirCity}
    >
    <option value="">Select City</option>
    {statesData.map((stateData) => (
        <optgroup key={stateData.state} label={stateData.state}>
            {stateData.cities.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
            ))}
        </optgroup>
    ))}
</select>
</div>
<br />
<button type="submit" className="btn01 btn-submit">Save Pro file</button>
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
