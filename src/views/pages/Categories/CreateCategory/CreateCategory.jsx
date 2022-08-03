import {useState} from 'react'

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [parentID, setParentID] = useState("");

  const createCategory = () => {
     const payload = {
        categoryName,
        parentID
     }
  }
  return (
    <div>CreateCategory</div>
  )
}

export default CreateCategory