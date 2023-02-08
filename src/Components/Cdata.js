import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cdata = () => {
    const navigate=useNavigate()
    const cdetails=(id)=>{
      navigate(`/customer/${id}`)
    }
    const [serach,setSerach]=useState([])
    const [userdata,setUserdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/customer')
        .then(res=>res.json())
        .then(data=>{
           
            setUserdata(data)
        })
      
 
    },[])
    return (
      <>
    <form class="d-flex">
        <input class="form-control me-2" name='' type="search" placeholder="Search" onChange={(e)=>{setSerach(e.target.value)}} aria-label="Search"/>
      
      </form>
    
        <table className="table">
  <thead>
    <tr>
      <th scope="col">C-Name</th>
    
      <th scope="col">C-No</th>
   
      <th scope="col">Room-No</th>
    
    </tr>
  </thead>
  <tbody>
   {
    userdata.filter((data)=>{
      if(serach==""){
        return data
      }
      else if(data.cname.toLowerCase().includes(serach.toLowerCase())){
        return data
      }
    })
 .map(data=>
        <tr>
    
      <td>{data.cname}</td>
     
      <td>{data.mno}</td>
      <td>{data.room}</td>
     
     
     
      <input class="form-control bg-info"  onClick={()=>cdetails(data?._id)}  type="button" value="DETAILS" />
    </tr>
   
    )
   }
    
     
  </tbody>
</table>
</>
    );
};

export default Cdata;