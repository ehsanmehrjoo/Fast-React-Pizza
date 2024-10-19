import { useState } from "react"

 

function SearchOrder() {
    const [query, setQuery] = useState('');
 
    function handelSubmit (e){
        e.preventDefault()
    }
  return (
    <form onSubmit={handelSubmit}>
        
     <input type="text" name="order" value={query} placeholder="Search order #"
      onChange={(e) => setQuery(e.target.value)}/>
    </form>
  )
}

export default SearchOrder