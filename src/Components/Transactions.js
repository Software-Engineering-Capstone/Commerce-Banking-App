import React from "react";
import TransactionForm from "./TransactionForm"
import { fireDBRef } from '../config/firebase'

const Transactions = () => {

    const addOrEdit = obj=>{
        fireDBRef.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                }
        )

    }
    return(
        <>
            <div className="row">
            <div className="col-md-8 offset-md-2">

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Transaction Register</h1>
                </div>
            </div>
            <div className="row">
                  <div className="col-md-5">
                    <TransactionForm addOorEdit={addOrEdit}/>

                </div>
                <div className="col-md-7">
                    <div>list of transacions</div>
                </div>
            </div>

            </div>
            </div>
        </>
     );
}

export default Transactions;
