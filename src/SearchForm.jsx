import { useState } from "react";

function SearchForm(){
    const [productName, setProductname]=useState("");
    function handleSubmit(e){
e.preventDefault();
alert(productName);
    }

function handleChange(e){
    setProductname(e.target.value);
}


return <>
<h1>Search Products</h1>
<form action="search" onSubmit={e=>handleSubmit(e)}>
Enter Product Name:<input type="text" name="pname" onChange={e=>handleChange(e)}/>
<button type="submit">Search</button>
</form>
</>

}

export default SearchForm;