import React from 'react'
import { useNavigation } from 'react-router-dom'

const Button = ({text}) => {
    const navigation = useNavigation();
    const submitting = navigation.state ==='submitting'
  return (<>
  <button type='submit' disabled={submitting} className="btn btn-block btn-active btn-accent">{
     submitting ? 'submitting' : text
  }</button>
  </>
  )
}

export default Button