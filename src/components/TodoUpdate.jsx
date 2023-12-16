import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const TodoUpadate = () => {

  const Navigate = useNavigate();
  const { id } = useParams()

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [updateData, setUpdateData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      phone,
      email,
      age,
      address
    }
    axios.put(`https://6405ae28eed195a99f893772.mockapi.io/crudop/${id}`, data)
      .then(res => {
        console.log(res);


      })
      .catch(err => {
        console.log(err)
      })
  }


  useEffect(() => {
    fetchTableData();
  }, [])

  const fetchTableData = () => {
    axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crudop/${id}`)
      .then(res => {
        console.log(res)
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setPhone(res.data.phone)
        setEmail(res.data.email)
        setAge(res.data.age)
        setAddress(res.data.address)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className='bg-white'>
          <h3 className='text-center text-[25px]'>Fill Form</h3>
          <form action="" onSubmit={handleSubmit}>
            <div className='grid lg:grid-cols-2 lg:gap-4 mt-2 px-[3rem]'>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=" First Name" required />
              </div>

              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Last Name
                </label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Last Name" required />
              </div>


              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => {
                    const inputPhone = e.target.value;
                    // Allow only digits (numbers) and limit the input to 10 digits
                    const formattedPhone = inputPhone.replace(/\D/g, '').slice(0, 10);
                    setPhone(formattedPhone);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="tel" // Use type="tel" for phone number input
                  placeholder="Phone Number"
                  required
                />

              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Email Address
                </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email Address" required />
              </div>

              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Age
                </label>
                {/* <input value={age} onChange={(e) => setAge(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="Age" required /> */}

                <input
                  value={age}
                  onChange={(e) => {
                    const inputAge = e.target.value;
                    // Allow only digits (numbers) and limit the input to 10 digits
                    const formattedAge = inputAge.replace(/\D/g, '').slice(0, 2);
                    setAge(formattedAge);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number" // Use type="tel" for phone number input
                  placeholder="Age"
                  required
                />


              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Address
                </label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=" Address" required />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={() => Navigate(-1)} className='mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default TodoUpadate