import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToDo = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState();
    const [TableData, setTableData] = useState([])

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
        axios.post(`https://6405ae28eed195a99f893772.mockapi.io/crudop`, data)
            .then(res => {
                console.log(res);
                setFirstName('')
                setLastName('')
                setPhone('')
                setEmail('')
                setAge('')
                setAddress('')
                fetchTableData();
                toast.success(' Successfully Submitted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchTableData();
    }, [])

    const fetchTableData = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crudop`)
            .then(res => {
                console.log(res)
                setTableData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        axios.delete(`https://6405ae28eed195a99f893772.mockapi.io/crudop/${id}`)
            .then(res => {
                console.log(res)
                fetchTableData();
                toast.error('Successfully Deleted!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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
                            <button className='mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div className='flex items-center justify-center'>
                <div className="overflow-x-auto mt-4 lg:w-[70%] ">
                    <table className="table-auto min-w-full text-white bg-gray-800 ">

                        <thead>
                            <tr className="bg-gray-700">
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">First Name</th>
                                <th className="px-4 py-2">Last Name</th>
                                <th className="px-4 py-2">Phone No.</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Age</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        {
                            TableData ? TableData.map((items, index) => {
                                return (
                                    <tbody>
                                        <tr className="bg-gray-900 text-center">
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{items.firstName}</td>
                                            <td className="border px-4 py-2">{items.lastName}</td>
                                            <td className="border px-4 py-2">{items.phone}</td>
                                            <td className="border px-4 py-2">{items.email}</td>
                                            <td className="border px-4 py-2">{items.age}</td>
                                            <td className="border px-4 py-2">{items.address}</td>
                                            <td className="border px-4 py-2">
                                                <div className='flex gap-5'>
                                                    <Link to={'todo-view/' + items.id}><button className='bg-green-600 px-3 rounded-sm'>View</button></Link>
                                                    <Link to={'todo-update/' + items.id}><button className='bg-blue-600 px-3 rounded-sm'>Update</button></Link>
                                                    <button onClick={() => handleDelete(items.id)} className='bg-red-600 px-3 rounded-sm'>Delete</button>
                                                </div>
                                            </td>

                                        </tr>
                                    </tbody>
                                )
                            }) : <p className='text-white'>Loading...</p>
                        }

                    </table>
                </div>
            </div>
        </>
    )
}

export default ToDo