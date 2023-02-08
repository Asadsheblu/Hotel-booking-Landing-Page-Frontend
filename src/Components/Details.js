import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactSignatureCanvas from 'react-signature-canvas';
import { useReactToPrint } from 'react-to-print';

const Details = () => {
    const {Dataid}=useParams()
    console.log(Dataid);
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/customer/${Dataid}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='container-fluid pt-5'>
      
        <div ref={componentRef} className='container bg-light shadow  p-5'>
         
        <form>
      <div className=''>
      <label for="exampleFormControlInput1" className="form-label">Customer Name</label>
      <input type="text"  className="form-control w-75" value={details?.cname} readOnly></input>
      </div>
      <div >
      <label for="exampleFormControlInput1" className="form-label">Customer Father Name</label>
      <input type="text"  className="form-control w-75" value={details?.fname} readOnly></input>
      </div>
      <div >
      <label for="exampleFormControlInput1" className="form-label">Customer Mother  Name</label>
      <input type="text"  className="form-control w-75 " value={details?.mname} readOnly></input>
      </div>
      <div >
      <label for="exampleFormControlInput1" className="form-label">Customer  Contact No</label>
      <input type="text"  className="form-control w-75" value={details?.mno} readOnly></input>
      </div>
      <div >
      <label for="exampleFormControlInput1" className="form-label">Customer Room No</label>
      <input type="text"  className="form-control w-75" value={details?.room} readOnly></input>
      </div>
  
      <div >
      <label for="exampleFormControlInput1" className="form-label">Customer NID No</label>
      <input type="text"  className="form-control w-75" value={details?.idno} readOnly></input>
      </div>
      <div >
      <label for="exampleFormControlInput1" className="form-label">Customer Total Cost</label>
      <input type="text"  className="form-control w-75" value={details?.cost} readOnly></input>
      </div>

      </form>
      <div className='d-flex'>
      <u className='p-3 fw-bold'>Customer Sign</u>
      <u className='p-3 fw-bold mx-auto'>Hotel Manager Sign</u>
    

      </div>
   
            </div>
            <button onClick={handlePrint} className="print__button">  Print </button> 
        </div>
    );
};

export default Details;