import { useState, useRef } from 'react'
import './App.css'
import './components/Form'



function App() {

  const nameRef=useRef("");
  const emailRef=useRef("");
  const numberRef=useRef(0);
  const countryRef=useRef("");
  const descRef=useRef("");
  

const [form, setForm] =useState({
  name: "",
  nameError: "",
  email: "",
  emailError: "",
  number: 0,
  numberError: "",
  desc: "",
  descError: "",
  country: "",
  countryError: "",
})

function validate (form) {
  if(!form.name) {
   setForm({...form, nameError: "Name is empty"});
   return false;
  } else {
    setForm({...form, nameError: ""});
  }

  if(!form.email) {
    setForm({...form, emailErrorError: "Email is empty"});
    return false;
   } else {
     setForm({...form, emailError: ""});
   }

   if(!form.number) {
    setForm({...form, numberError: "Number is empty"});
    return false;
   } else {
     setForm({...form, numberErrorError: ""});
   }

   if(!form.country) {
    setForm({...form, countryError: "Country is empty"});
    return false;
   } else {
     setForm({...form, countryError: ""});
   }

   if(!form.desc) {
    setForm({...form, descError: "Desc is empty"});
    return false;
   } else {
     setForm({...form, descError: ""});
   }

  return true;
}


function handleClick (e) {
  e.preventDefault();
  if (validate(form)){
    console.log("validatsiyadan o'tdi")
  }
}

  return (
    <div className='container-wrapper'>
    <div className='header'>
      <div className='header-container'>
       <ul className='menu-item'>
        <li>Vakansiyalar</li>
        <li>Kandidatlar</li>
        <li>Kompaniyalar</li>
        <li>Xizmatlar</li>
        <li>Ta’lim</li>
        
       </ul>
       <div className='header-select'>
       <div>
       <select className='select'>
          <option >O'zb</option>
          <option>Rus</option>
          <option>English</option>
        </select> 
       </div>
       <div>
       <button className='btn'>Boshlash</button>
       </div>
       </div> 
       
    </div>
    </div>

    <div className='card'>
  <div className='main'>
    <h3>Kompaniya ma’lumotlari</h3>
    <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
   <form className='form'>
    <div className='form-company'>
      <label className='input-label'>Kompaniya nomi <span>*</span> </label>
      <input  type='text' ref={nameRef}/>
    </div>
    <div className='form-email'>
      <label className='input-label'>Email <span>*</span></label><br/>
      <input ref={emailRef} type='email' placeholder='Email '/>
   </div>
    <div className='form-phone'>
      <label className='input-label'>Telefon raqami <span>*</span></label>
      <select ref={numberRef}  typeof='number'>
        <option>Uz +9989</option>
        <option>Ru +79</option>
        <option>USA +16</option>
      </select>
    </div>
   
   
      <div className='form-country'>
        <label className='input-label'>Davlat <span>*</span></label><br/>
        <select ref={countryRef}>
          <option>Uzbekistan</option>
          <option>Russian</option>
          <option>AQSH</option>
        </select>
    </div>
    <div className='form-textarea'>
      <label className='input-label'> Izoh<span> *</span></label><br/>
      <textarea ref={descRef} placeholder='Kompaniya haqida izoh qoldiring'></textarea>
    </div>
    <div className='card-btn'>
    <button className='cancel-btn'>ORTGA</button>
    <button onClick={handleClick} className='next-btn'>KEYINGISI</button>
  </div>
   </form>
  </div>
  
  </div>
   
    </div>
  )
}

export default App
