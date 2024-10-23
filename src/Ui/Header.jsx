import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

 

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3  uppercase bg-yellow-400 text-gray-700"  >
        <Link className="tracking-[5px] " to="/">Fast React Pizza Co.</Link>
        <SearchOrder />
        {/* <p>ehsan</p> */}
    </header>
  )
}

export default Header