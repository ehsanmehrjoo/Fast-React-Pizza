import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

 

function Header() {
  return (
    <header className="uppercase bg-yellow-400 text-gray-700"  >
        <Link className="tracking-widest" to="/">Fast React Pizza Co.</Link>
        <SearchOrder />
        {/* <p>ehsan</p> */}
    </header>
  )
}

export default Header