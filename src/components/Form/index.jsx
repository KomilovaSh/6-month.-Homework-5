import React from 'react'
import './index.css'

function index() {
  return (
  <div>
     <div className='card'>
  <div className='main'>
    <h3>Kompaniya ma’lumotlari</h3>
    <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
   <form className='form'>
    <div className='form-company'>
      <h4>Kompaniya nomi *</h4>
      <input type='text' placeholder=
      'Kompaniya nomi'/>
    </div>
    <div className='form-email'>
      <h4>Email *</h4>
      <input placeholder='Email '/>
    </div>
    <div className='form-phone'>
      <h4>Telefon raqami *</h4>
      <input placeholder='UZ +9989'/>
    </div>
    <div className=''>
      <div className=''>
        <select>
          <option>Uzbekistan</option>
          <option>Russian</option>
          <option>AQSH</option>
        </select>
      </div>
    </div>
   </form>
  </div>
  </div>
  </div>
  )
}


export default index
