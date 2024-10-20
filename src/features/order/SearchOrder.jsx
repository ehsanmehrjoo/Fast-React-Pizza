import { useState } from "react"
import { useNavigate } from "react-router-dom";

 

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate()
 
    function handelSubmit (e){
        e.preventDefault()
        if(!query) return
        navigate(`/order/${query}`)
        setQuery('')
    }
  return (
    <form onSubmit={handelSubmit}>
        
     <input type="text" name="order" value={query} placeholder="Search order #"
      onChange={(e) => setQuery(e.target.value)}/>
    </form>
  )
}

export default SearchOrder