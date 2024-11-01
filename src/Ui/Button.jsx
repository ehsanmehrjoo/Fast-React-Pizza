
import { Link } from 'react-router-dom'

function Button({disabled , children , to , type}) {
  
  
     const base= ' text-stone-800 bg-yellow-400 hover:bg-yellow-300 uppercase font-semibold   inline-block tracking-wide rounded-full  duration-500 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed disabled:bg-stone-600  ';
     
       const styles = {
 
        primary : base + '   py-3 px-4 sm:px-6 sm:py-4',
primaryClear:   ' ml-2.5 bg-stone-100 rounded-full border-2 border-stone-300 text-stone-400 py-3 px-4 sm:px-6 sm:py-4',

        small : base + '  py-2 px-4 sm:px-5 sm:py-2.5 text-xs '

           }

  if(to) return <Link className={styles[type]} to={to}>{children}</Link>

  return (
    <button disabled={disabled}   className={styles[type]} >
      {children}
    </button>
  )
}

export default Button