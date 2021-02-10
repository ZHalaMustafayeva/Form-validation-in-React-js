import React,{useState} from 'react';
import './Form.css'

function Form() {
   
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        lastName:"",
        choosePassword:""
    })
    const [error,setError]= useState("");
    const [nameError, setNameError]= useState("");
    const [lnameError, setLnameError]= useState("");
    const [emailError, setEmailError]= useState("");
    const [passError, setPassError]= useState("");
    const [CpassError, setCpassError]= useState("");
    


    function inputHandler(e){
        const value = e.target.value;
        const key = e.target.name;
        setUser({
            ...user,
            [key]:value
        })
    }
    function submit(e){
        e.preventDefault()
        if(user.name!=="" && user.password!=="" &&  user.email!=="" && user.lastName !=="" && user.choosePassword === user.password){
            setError("success");
            // setError("");
        }
        else{           
            if(user.name === ""){
                setNameError("NAME MUST BE FILLED")
                // setNameError("");
            }
            else if(user.lastName === ""){
                setLnameError("LASTNAME MUST BE FILLED")
                // setLnameError("");
            }
            else if(user.password.length<8){
                setPassError("password must be 8 symbols ")
                // setPassError("")
            }
            else if(user.choosePassword !== user.password){
                setCpassError("kodunuz yuxaridaki ile eyni olmalidir ")
                // setCpassError("")
            }
            
        }
    
        

    }

    return (
        <div className={"formValidation"}>
            <div className={"heading"}>
                <h2>Sign Up</h2>
                <h5>Log in</h5>
            </div>
            <div className={"buttons"}>
                <button>Facebook</button>
                <button>Google</button>
            </div>
            <form onSubmit={submit}>
            
                <div>
                    <label htmlFor="name"></label>
                    <input value={user.name} placeholder="First name"  name="name" id="name" onChange={inputHandler}/>
                    {
                    nameError? <h2>{nameError}</h2>:null
                    }
                </div>
                
                <div>
                    <label htmlFor="lastName"></label>
                    <input value={user.lastName} placeholder="Lastname" name="lastName" id="lastName" onChange={inputHandler}/>
                    {
                    lnameError? <h2>{lnameError}</h2>:null
                    }
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input value={user.email} placeholder="Email" name="email" type={"email"} id="email" onChange={inputHandler} />
                    {
                    emailError? <h2>{emailError}</h2>:null
                    }
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input value={user.password} placeholder="Choose password" name="password" type={"password"} id="password" onChange={inputHandler}/>
                    {
                    passError? <h2>{passError}</h2>:null
                    }
                </div>
                <div>
                    <label htmlFor="choosePassword"></label>
                    <input value={user.choosePassword} placeholder="Confirm Password"  name="choosePassword" type={"password"} id="choosePassword" onChange={inputHandler}/>
                    {
                    CpassError? <h2>{CpassError}</h2>:null
                    }
                </div>
               
                <div>
                    <label>
                        <input type="checkbox"/> Agree our Terms & Conditions
                    </label>
                </div>
                
                <input type="submit" value="Creat Account"/>
                {
                    error? <h2>{error}</h2>:null
                }
            </form>
            
        </div>
    )
}
export default Form;