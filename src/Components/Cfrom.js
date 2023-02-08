import React, { useEffect, useState } from 'react';
import Cdata from './Cdata';

const Cfrom = () => {
    const addPost=(e)=>{
        e.preventDefault()
        
        const cname=e.target.cname.value
        const fname=e.target.fname.value
        const mname=e.target.mname.value
        const mno=e.target.mno.value
        const room=e.target.room.value
        const idno=e.target.idno.value
        const cost=e.target.cost.value
        
        const data={cname,fname,mname,mno,room,idno,cost}
        fetch('http://localhost:5000/customer',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            window.location.reload()
          
            console.log(data);
        }
    })
    }
    
    return (
        <div className='container shadow bg-light p-5'>
             <form onSubmit={addPost}>
    <div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Customer Name</label>
<textarea name='cname' className="form-control" id="exampleFormControlTextarea1" rows="1" required></textarea>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Customer Father Name</label>
<textarea name='fname' className="form-control" id="exampleFormControlTextarea1" rows="1" required></textarea>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Customer Mother Name</label>
<textarea name='mname' className="form-control" id="exampleFormControlTextarea1" rows="1" required></textarea>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Customer Mobile No</label>
<input type="number" name='mno' className="form-control" id="exampleFormControlTextarea1" rows="1" required></input>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Customer ID No</label>
<input type="number" name='idno' className="form-control" id="exampleFormControlTextarea1" rows="1" required></input>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Customer Room No</label>
<input type="number" name='room' className="form-control" id="exampleFormControlTextarea1" rows="1" required></input>
</div>
<div className="mb-3 mx-auto w-75">
<label for="exampleFormControlInput1" className="form-label">Total Cost</label>
<input type="number" name='cost' className="form-control" id="exampleFormControlTextarea1" rows="1" required></input>
</div>


<input className="form-control mx-auto w-25 mt-3 rounded bg-primary text-white" type="submit" value="POST" />

</form>
<Cdata/>
        </div>
    );
};

export default Cfrom;