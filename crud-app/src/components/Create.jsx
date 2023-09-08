import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    // const [active,setActive] = useState(true)
        const navigate = useNavigate();


    const handlesubmit = (e)=>{
        e.preventDefault();
        // console.log({id,name,email,phone});
        const MainData = {name,email,phone} 

        fetch("http://localhost:3005/Employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(MainData)
        }).then((res)=>{
            alert('saved successfully')
            navigate('/')
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <>
            <div className="row">
                <div className="offset-lg-3 col-lg-6 my-5">
                    
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h2 className='text-center'>Employess</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12 p-2">
                                        <div className="form-group">
                                            <label >ID</label>
                                            <input value={id} disabled placeholder='Disabled' className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label >Name</label>
                                            <input value={name} onChange={e=>setName(e.target.value)} className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label >Email</label> 
                                            <input value={email} onChange={e=>setEmail(e.target.value)} className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label >Phone</label>
                                            <input value={phone} onChange={e=>setPhone(e.target.value)} className='form-control' />
                                        </div>
                                         <div className='form-group my-2'>
                                            <button type='submit' className='btn btn-success mx-2'>Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;