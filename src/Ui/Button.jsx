
import { Link } from 'react-router-dom'

function Button({disabled , children , to , type , onClick}) {
  
  
     const base= ' text-stone-800 bg-yellow-400 hover:bg-yellow-300 uppercase font-semibold   inline-block tracking-wide rounded-full  duration-500 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed disabled:bg-stone-600  ';
     
       const styles = {
 
        primary : base + '   py-3 px-4 sm:px-6 sm:py-4',
        small : base + '  py-2 px-4 sm:px-5 sm:py-2.5 text-xs ',
        secondary:
        'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',


           }

  if(to) return <Link className={styles[type]} to={to}>{children}</Link>

  if(onClick)return (
    <button onClick={onClick} disabled={disabled}   className={styles[type]} >
      {children}
    </button>
  )
  return (
    <button disabled={disabled}   className={styles[type]} >
      {children}
    </button>
  )
}

export default Button