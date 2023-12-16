import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const TodoView = () => {

    const { id } = useParams();
    const Navigate = useNavigate()
    const [viewData, setviewData] = useState({})

    useEffect(() => {
        ViewData();
    }, [])

    const ViewData = () => {
        axios.get(`https://6405ae28eed195a99f893772.mockapi.io/crudop/${id}`)
            .then(res => {
                console.log(res)
                setviewData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="flex items-center justify-center mt-5">
                <div className='bg-white px-[5rem] py-[2rem]'>
                    <h3 className='text-[25px] font-medium'>Fisrt Name: {viewData.firstName}</h3>
                    <h3 className='text-[25px] font-medium'>Last Name: {viewData.lastName}</h3>
                    <h3 className='text-[25px] font-medium'>Phone Number: {viewData.phone}</h3>
                    <h3 className='text-[25px] font-medium'>Email Address: {viewData.email}</h3>
                    <h3 className='text-[25px] font-medium'>Age: {viewData.age}</h3>
                    <h3 className='text-[25px] font-medium'>Address: {viewData.address}</h3>
                    <button onClick={() => Navigate(-1)} className='bg-green-600 px-3 rounded-sm text-white text-[20px] mt-3'>Back</button>
                </div>
            </div>
        </>
    )
}

export default TodoView