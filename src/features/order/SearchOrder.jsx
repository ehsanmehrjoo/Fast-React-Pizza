import { useState } from "react"

 

function SearchOrder() {
    const [query, setQuery] = useState('');

  return (
    <div>
        
     <input type="text" name="order" value={query} placeholder="Search order #"
      onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default SearchOrder