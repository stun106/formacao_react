import React from "react"

export default function Botao({label,onClick}){
    return (
      <button tabIndex={0} className="border-solid border-2 border-stone-900 rounded bg-slate-300 hover:bg-slate-500 focus:border-neutral-50 w-14 h-14" onClick={onClick}>
        <strong>{label}</strong>
      </button>
    )
}