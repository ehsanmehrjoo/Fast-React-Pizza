import React from 'react'

function Button({disabled , children}) {
  return (
    <button disabled={disabled} className='
    bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full 
    hover:bg-yellow-300 duration-500 transition-colors focus:outline-none focus:ring 
    focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed disabled:bg-stone-600' >
      {children}
    </button>
  )
}

export default Button