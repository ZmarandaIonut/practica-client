import {useState} from 'react'

const ResendVerifyEmail = () => {
 const [email, setEmail] = useState("");
  
 const resendEmail = () => {
    const payload = {
        email
    }
 }
  return (
    <div>ResendVerifyEmail</div>
  )
}

export default ResendVerifyEmail