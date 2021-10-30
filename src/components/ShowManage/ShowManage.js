// import React from 'react';

// const ShowManage = (props) => {
//     const {_id ,firstName,email,phone,eventName } = props.user

//     const handleDelete = id =>{
//         const url = (`http://localhost:5000/users/${id}`)
//         fetch(url, {
//             method: "DELETE"
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.deletedCount ){
//                 alert('Deleted SuccesFully')
                
//             }
//         })
//     }
//     return (
//         <div className='manageevents'>
//             <div>
//                 <h4>{firstName}</h4>
//             </div>
//             <div>
//                 <h4>{email}</h4>
//             </div>
//             <div>
//                 <h4>{phone}</h4>
//             </div>
//             <div>
//                 <h4>{eventName}</h4>
//             </div>
//             <div>
//             <button onClick={() => handleDelete(_id)} style={{border:'0', backgroundColor:'red', color:'white', fontWeight:'700'}}>X</button>
//             </div>
//         </div>
//     );
// };

// export default ShowManage;