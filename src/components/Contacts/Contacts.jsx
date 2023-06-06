import "./Contacts.scss";
import {useState} from "react";

const Contacts = () => {
    const [data, setData] = useState({
        userName: "",
        userPhoneNumber:"",
        userEail: "",
        userMessage:""
    })
    
    const handleChange = (event) => {
       const {name, value}= event.target;
        setData({...data, [name]:value,})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(typeof(data))
    }
    return (
        <div className="contacts" id="contacts">
            <div className="contact-container">
                
		    <h2>Contacts</h2>
			<form required autocomplete  onSubmit={handleSubmit} >
			
			    <input 
			    type="text" 
			    placeholder="Full Name" 
			    name="userName"
			    value={data.userName || ""}
			    onChange={handleChange}
			    />			    
			    
			    <input 
			    type="number" 
			    placeholder="Number" 
			    pattern=".[11]"
			    name="phoneNumber"
			    value={data.phoneNumber || ""}
			    onChange={handleChange}
			    
			    />			   
			    <input 
			    type="email" 
			    placeholder="Email" 
			    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
			    name="email"
			    value={data.email || ""}
			    onChange={handleChange}
			    />
			    <textarea 
			    placeholder="Your Message"
			    name="userMessage"
			    value={data.userMessage || ""}
			    onChange={handleChange}
			    ></textarea>
			    <button type="submit" id="submit-btn"> Submit</button>
			    {data.length > 0 ?  <span>Thanks, I will reply ASAP :-)</span> : " nothing "}
        </form>
            </div>
        </div>
    )
}

export default Contacts;