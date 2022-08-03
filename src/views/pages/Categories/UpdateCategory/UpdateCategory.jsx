import {useState} from 'react'

const UpdateCategory = () => {
    const [categoryName, setCategoryName] = useState("");
    const [parentID, setParentID] = useState("");

    const updateCategory = () => {
        const payload = {
           categoryName,
           parentID
        }
     }
     
  return (
    <div>UpdateCategory</div>
  )
}

export default UpdateCategory