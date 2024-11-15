import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLock, FaEnvelopeOpenText, FaUnlock } from "react-icons/fa";
import './SignIn.css'
import { useDispatch, useSelector } from 'react-redux';
// import { Toast } from 'react-bootstrap';
import { login } from '../../Redux/Slice/AuthSlice';

const SignIn = () => {
    //state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false)
    const [result, setresult] = useState([])

    //redux state
    const { loading, error } = useSelector((state) => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();
    // const redirectTo = new URLSearchParams(location.search).get('redirectTo');
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login())
            .then((result) => {
                console.log("result", result.payload);
                setresult(result.payload)
                
            }).catch(err => {
                console.log(err);
            })

        const match = result?.find((result) => {
            return result.Email === email && result.Password === password
        })

        // console.log("First name",match.First_name)
        if (match) {
            alert("Logged In Successfully");
            window.localStorage.setItem("userName",match?.First_name)
            // navigate(redirectTo === 'cart' ? '/cart' : '/');
            navigate("/")
        } else if (!match) {
            alert("Data does not matched")
        }


    }



    return (
        <div className='wrap'>
            <div className='wrapper'>
                <div className="form-box signin">
                    <form onSubmit={submitHandler}>
                        <h1>SIGN IN</h1>
                        <div className="input-box">
                            <input type="email" name="email" placeholder='Enter your email id' value={email} onChange={e => setEmail(e.target.value)} />
                            <FaEnvelopeOpenText className='icon' />
                        </div>
                        <div className="input-box">
                            <input type={visibility ? "text" : "password"} name="pass" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                            <div onClick={()=> setVisibility(!visibility)}>
                            {
                            visibility ? <FaUnlock className='icon' /> : <FaLock className='icon' /> 
                            }
                            </div>
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type='checkbox' />Remember me
                            </label>
                            <Link className='link1'>Forgot Password?</Link>
                        </div>
                        <button className='sub1' type="submit">
                            {loading ? 'Loading' : 'Sign In'}
                        </button>
                        {error && (
                            <div className='alert alert-danger' role='alert'>{error}</div>
                        )}
                        <button className='res1' type="reset">Reset</button>
                        <div className="register-link">
                            <p>Don't have an account?<Link className='link2' to="/Signup">Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn