import React from "react";
import TransactionForm from "./TransactionForm"

const Transactions = () => {

    return(
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">Transaction Register</h1>
                </div>
            </div>
            <div className="row">
                  <div className="col-md-5">
                    <TransactionForm />

                </div>
                <div className="col-md-7">
                    <div>list of transacions</div>
                </div>
            </div>
        </>
     );
}

export default Transactions;
