import React from 'react'

export default function PageButton({count, pageBtnClick}) {
    const pages = []
   for(let i=1; i<=count; i++){
       pages.push(i)
   }
   return(
       <>
       {pages.map(btn=>{
           return <button onClick={pageBtnClick} key={btn} value={btn} className="btn btn-outline-dark m-2">{btn}</button>
       })}
       </>
   )
}
