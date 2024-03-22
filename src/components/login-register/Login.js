import { useForm } from "react-hook-form";
import {useState} from 'react'
import './Login.css'
function Login() {
    let [users,setUsers]=useState([])


    let { register, handleSubmit, formState: { errors }} = useForm();
  
    function handleFormSubmit(userObj) {
      setUsers([...users,userObj])
    }

  return (
    <div className="body">
      <form>
        <div class="main-custom">
          <div class="left">
            <div class="up">
              <h1 className="donate">Login</h1>
            </div>
            <div>
            <div className="usertype">
              <div className='user'>
                <input type="radio" className='user' name="userType" id="userType" value="Staff" {...register("userType", { required: true })} />
                <label>Staff</label>
              </div>
              <div className='user'>
                <input type="radio" className='user' name="userType" id="userType" value="Student" {...register("userType", { required: true })} />
                <label>Student</label>
              </div>
            </div>
              <div >
                <input type="text" className="in1" placeholder="Enter your roll number" {...register("name", { required: true })}/>
              </div>
              
            </div>
            <div >
              <input type="password" className="in2" placeholder="Enter your password" {...register("pwd", { required: true })}/>
            </div>
            <button type="submit" className="fs-5">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
  }
    
export default Login;