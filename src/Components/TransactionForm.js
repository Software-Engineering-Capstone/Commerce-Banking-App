import React,{useState,useEffect} from "react"

const TransactionForm = () => {
const initialFieldValues = {
    fullName:'',
    mobile: '',
    email: '',
    address: ''
    }

    var [values,setValues] = useState(initialFieldValues)

    return( 
       <form autoComplete="off">
           <div className="form-group inpuut-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name = "fullname"
                value ={values.fullName}/>
            </div>
            <div className="form-row">
                <div className="form-group inpuut-group col-md-6">
                    <div className="input-group-prepend ">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile " name = "mobile"
                    value ={values.mobile}/>
                    
                    <div className="form-group inpuut-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                    <input className="form-control" placeholder="Email" name = "email"
                    value ={values.email}/>
                    </div>
                </div>
            </div>

       </form>
    );
}

export default TransactionForm;