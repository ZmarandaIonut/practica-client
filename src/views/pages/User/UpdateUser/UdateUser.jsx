import {useState} from 'react'

const UdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateUser = () => {
     const payload = {
        name,
        email,
        password
     }
  }
  return (
    <div>UdateUser</div>
  )
}

export default UdateUser