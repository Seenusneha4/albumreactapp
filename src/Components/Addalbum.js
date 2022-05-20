import React, { useState } from 'react'

const Addalbum = () => {
    var [id,setid]=useState("")
    var [title,settitle]=useState("")
    const subdata=()=>{
        const data={"id":id,"title":title}
        console.log(data)
    }
  return (
    <div>
    <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">ID</label>
            <input onChange={(a)=>{setid(a.target.value)}}  type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">TITLE</label>
            <input onChange={(a)=>{settitle(a.target.value)}}  type="text" className="form-control"/>
           </div>
            
             <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
               <button onClick={subdata} className="btn btn-success">SUBMIT</button>
            </div>
            
        </div>
    </div>
</div>


</div>


  )
}

export default Addalbum