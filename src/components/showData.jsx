import React from 'react'

export default function ShowData({title , name}) {
  return (
    <>
      <div style={{marginLeft:50,marginRight:50, marginBottom:30}}>
            <h3>{title}:</h3>
            <p style={{border:'2px solid #38b038', borderRadius:'5px',padding:10}}>{name}</p>
          </div>
    </>
  )
}
