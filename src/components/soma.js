import React from "react"

export default function Soma(props){
    return (
      <button className="border-solid border-2 border-stone-900 bg-slate-300 w-14 h-16">
        {props.children}
      </button>
    )
}