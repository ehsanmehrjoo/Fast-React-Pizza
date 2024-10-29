import { useState } from "react"
import { useNavigate } from "react-router-dom";

 

function SearchOrder({ setIsOpen}) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate()
 
    function handelSubmit (e){
        e.preventDefault()
        if(!query) return
        navigate(`/order/${query}`)
        setQuery('')
        setIsOpen(false)
    }
  return (
    <form onSubmit={handelSubmit}>
        
     <input type="text" name="order" value={query} placeholder="Search order #"
      onChange={(e) => setQuery(e.target.value)} 
        className="px-4 py-2 text-sm  transition-all duration-300 text-stone-400 bg-yellow-100 rounded-full placeholder:text-base placeholder:text-stone-400 w-28 sm:w-[288px] sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
      />
    </form>
  )
}

export default SearchOrder