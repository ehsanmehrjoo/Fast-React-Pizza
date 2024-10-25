import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/users/Username"

 

function Header() {
  return (
    <header className=" uppercase bg-yellow-400 text-gray-700 px-4 py-3 border-b border-stone-500 sm:px-6"  >
        <Link className="tracking-widest" to="/">Fast React Pizza Co.</Link>
        <SearchOrder />
       <Username />
    </header>
  )
}

export default Header