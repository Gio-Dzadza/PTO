import React from 'react'

export default function Button({ text, onClick, active }) {
    return (
        <button 
            className={`ml-[8px] flex-shrink-0 p-[10px] sm:rounded-xl sm:border-[1px] border-btn-color sm:border-btn-border-color ${active ? 'font-bold sm:bg-btn-color text-btn-color sm:text-white border-b' : 'hover:bg-btn-color text-btn-text-color hover:text-white'}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
