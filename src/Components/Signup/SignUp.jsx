import React, { useState } from 'react'
import { FaImage, FaMobileRetro } from 'react-icons/fa6';
// import { TbBuildingEstate } from 'react-icons/tb';mdu
import { FaEnvelopeOpenText, FaLock, FaUnlock, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useDispatch } from 'react-redux';
import { registration } from '../../Redux/Slice/AuthSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const redirect = useNavigate();
    const validPass = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')
    // const valName = RegExp('^([A-Za-z]{1,10})$')
    const valEmail = RegExp(`/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i`)
    const [inputData, setinputData] = useState({
        fname: "", lname: "", mob: "", mail: "", pass1: "", pass2: "", state: "",
        error: { fname: "", lname: "", mob: "", mail: "", pass1: "", pass2: "", state: "" }
    })
    const [imageStore, setImageStore] = useState()
    const [getData, setgetData] = useState();
    const [errorData, setErrordata] = useState();
    const [visible, setVisible] = useState(false)
    const [visiblee, setVisiblee] = useState(true)

    const changeHandler = (event) => {
        event.persist();
        let { value, name } = event.target;
        console.log(value, name);
        let err = inputData.error;

        switch (name) {
            case "fname":
                if (value.length < 1) {
                    err.fname = "Fill it up*";
                } else {
                    err.fname = "";
                }
                break;
            case "lname":
                if (value.length < 1) {
                    err.lname = "Fill it up*";
                } else {
                    err.lname = "";
                }
                break;
            case "mob":
                if (value.length < 1) {
                    err.mob = "Fill it up*";
                } else {
                    err.mob = "";
                }
                break;
            case "mail":
                err.mail = !valEmail.test(value) ? "Fill it up*" : "";
                break;
            case "pass1":
                if (value.length < 1) {
                    err.pass1 = "Fill it up*";
                }
                else if (!validPass.test(value)) {
                    err.pass1 = "Weak password"
                }
                else {
                    err.pass1 = "Strong password";
                }
                break;
            case "pass2":
                if (value.length < 1) {
                    err.pass2 = "Fill it up*";
                } else {
                    err.pass2 = "";
                }
                break;
            case "state":
                if (value.length < 1) {
                    err.state = "Fill it up*";
                } else {
                    err.state = "";
                }
                break;
            default:
                console.log("Not Applicable");
                break;
        }
        setinputData({ ...inputData, [name]: value, error: err });
    };
    console.log(getData);

    const changeHandlerimage = (e) => {
        console.log("Choosen image", e.target.files);
        const file=e.target.files[0]
        
            const reader = new FileReader()
             reader.readAsDataURL(file)
    
             reader.onloadend = ()=>{
                setImageStore(reader.result)
             }
             reader.onerror = (err)=>{
                 console.error("Error reading file",err)
             }   
    
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted Data", inputData);


        let findData = getData?.find((val) =>
            val.First_name.toLowerCase() ===
            inputData.fname.toLowerCase(),
        );
        console.log("Data Existing", findData);

        let findDataa = getData?.find((vall) =>
            vall.Last_name.toLowerCase() ===
            inputData.lname.toLowerCase(),
        );
        console.log("Data Existing", findDataa);

        if (findData) {
            setErrordata("Existing user name can't be use");
        } else {
            let userData = {
                First_name: inputData.fname,
                Last_name: inputData.lname,
                Mobile_number: inputData.mob,
                Email: inputData.mail,
                Password: inputData.pass1,
                Confirm_password: inputData.pass2,
                State: inputData.state,
                Profile_pic: imageStore,
            };
            dispatch(registration(userData)).then(res => {
                console.log(res);
                alert("Successfully Submitted")
                redirect('/signin')
            }).catch(err => {
                console.log(err);
            })
            console.log("Submitted from Form");

        }
    }
    return (
        <div className='wrap1'>
            <div className='wrapper1'>
                <div className="form-box signup">
                    <form onSubmit={handleSubmit}>
                        <h2>SIGN UP</h2>
                        <div className="input-box">
                            <input type="text" name="fname" placeholder='Firstname' onChange={changeHandler} />
                            <FaUserAlt className='icon' />
                            <br />
                            {
                                inputData.error?.fname &&
                                    inputData.error?.fname.length > 1 ? (
                                    <p className="mt-2 text-warning">
                                        {inputData.error?.fname}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="input-box">
                            <input type="text" name="lname" placeholder='Lastname' onChange={changeHandler} />
                            <FaUserAlt className='icon' />
                            {
                                inputData.error?.lname &&
                                    inputData.error?.lname.length > 1 ? (
                                    <p className="mt-2 text-warning">
                                        {inputData.error?.lname}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="input-box">
                            <input type="number" name="mob" placeholder='Enter your mobile number' onChange={changeHandler} />
                            <FaMobileRetro className='icon' />
                            {
                                inputData.error?.mob &&
                                    inputData.error?.mob.length > 1 ? (
                                    <p className="mt-2 text-warning">
                                        {inputData.error?.mob}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="input-box">
                            <input type="email" name="mail" placeholder='Enter your email id' onChange={changeHandler} />
                            <FaEnvelopeOpenText className='icon' />
                            {
                                inputData.error?.mail &&
                                    inputData.error?.mail.length > 1 ? (
                                    <p className="mt-2 text-warning">
                                        {inputData.error?.mail}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="input-box">
                            <input type={visiblee ? "text" : "password"} name="pass1" placeholder='Password' onChange={changeHandler} />
                            <div onClick={()=> setVisiblee(!visiblee)}>
                            {
                            visiblee ? <FaUnlock className='icon' /> : <FaLock className='icon' /> 
                            }
                            </div>
                            {
                                inputData.error?.pass1 &&
                                    inputData.error?.pass1.length > 1 ? (
                                    <p className="mt-2 text-warning">
                                        {inputData.error?.pass1}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className="input-box">
                            <input type={visible ? "text" : "password"} name="pass2" placeholder='Re-enter password' onChange={changeHandler} />
                            <div onClick={()=> setVisible(!visible)}>
                            {
                            visible ? <FaUnlock className='icon' /> : <FaLock className='icon' />
                            }
                            </div>
                            {
                                inputData.error?.pass2 &&
                                    inputData.error?.pass2.length > 1 ? (
                                    <p className="mt-2 text-warning">
                                        {inputData.error?.pass2}
                                    </p>
                                ) : null
                            }
                        </div>
                        <div className='input-box'>
                            <input className='imagee' type="file" name="image" placeholder='choose image' onChange={changeHandlerimage} />
                            <FaImage className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type='checkbox' />I agree to the terms and conditions
                            </label>
                        </div>
                        <button className='sub' type="submit">Sign Up</button>
                        <div className="register-link">
                            <p>Already have an account? <Link className='link2' to="/signin">SignIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp