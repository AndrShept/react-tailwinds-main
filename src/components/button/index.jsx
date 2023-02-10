import React from 'react'

const borderStyles = 'border-2 border-indigo-800 rounded-lg hover:bg-indigo-800 hover:text-almost-white transition-opacity transition-all  drop-shadow '
const filledStyles = 'text-almost-white bg-black rounded-lg  py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

export const Button = ({
    children = "",
    hasBordder = false,
    isFilled = false
}) => {
  return (
    <button className={`text-gray px-5 py-2 ${hasBordder && borderStyles}  ${isFilled && filledStyles}`}>{children}</button>
  )
}
