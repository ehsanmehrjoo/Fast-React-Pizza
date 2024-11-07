import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between uppercase bg-yellow-400 text-gray-700 px-4 py-3 border-b border-stone-500 sm:px-6 relative">
      <button
        className="lg:hidden p-2 text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <div className="w-6 h-0.5 bg-gray-700 my-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 my-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 my-1"></div>
      </button>

      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>

      <div className="hidden lg:flex items-center space-x-4">
        <SearchOrder />
        <Username />
      </div>

      {/* Sidebar for mobile view */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="fixed top-0 left-0 h-full w-64 bg-yellow-400 text-white p-4 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-gray-400 focus:outline-none mb-6 top-0"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-lg font-semibold text-gray-700"
                onClick={() => setIsOpen(false)} // Close the sidebar when clicking the link
              >
                Fast React Pizza Co.
              </Link>
              <SearchOrder isOpen={isOpen} setIsOpen={setIsOpen}/>
              <Username />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

