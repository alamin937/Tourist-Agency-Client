import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../UseHooks/UseAuth';

const PlaceOrder = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user} = UseAuth();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/users',data)
        .then(res =>{
            if(res.data.insertedId){
                alert("Users Added")
                reset();
            }
        })
    };
    return (
        <div className='addevent'>
            <h1 className='text-white' style={{display:'inline-block', marginTop:'40px'}}>User Information</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("firstName")} />
      <input defaultValue={user.email} {...register("email")} />
      <input {...register("phone")} placeholder="Phone Number" />
      <input {...register("eventName")} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default PlaceOrder;