import {useState} from 'react'

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(0);

  const createProduct = () => {
     const payload = {
        productName,
        categoryID,
        description,
        quantity,
        price,
        ...(image.length > 0) && {image},
        ...(status > 0) && {status}
     };
  }
  return (
    <div>CreateProduct</div>
  )
}

export default CreateProduct