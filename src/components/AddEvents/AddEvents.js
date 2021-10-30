import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddEvents.css'

const AddEvents = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://salty-springs-47787.herokuapp.com/tourist', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added Succesfully')
                reset();
            }
        })
    };
    return (
        <div className='addevent'>
           <div className='event'>
            <h1>Add Event</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input placeholder='Event Name' {...register("name")} />
                  <input placeholder='Image' {...register("img")} />
                  <input placeholder='Rate' {...register("rate")} />
                  <textarea placeholder='Description' {...register("description")} />
                  <input type="submit" />
             </form>
           </div>
        </div>
    );
};

export default AddEvents;