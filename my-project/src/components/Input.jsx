import React from 'react'

const Input = ({label , name , type , defaultvalue}) => {
  return (
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">{label}</span>
    </label>
  <input type={type} defaultValue={defaultvalue} name={name} className="input input-bordered w-full max-w-xs" />
 
  
</div>
  )
}

export default Input