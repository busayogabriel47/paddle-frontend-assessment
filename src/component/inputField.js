import React from "react";


const InputField = () => {

    return (
        <div>
            <form class="row g-3 alignCenter">
                <div>
                    <div class="removeBorder">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="First Name"/>
                    </div>
                    <div class="removeBorder">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Last Name"/>
                    </div>
                </div>
                <div class="input-group mb-3 inputWidth col-12 col-md-12 mt-5">
                        <input type="text" class="form-control" placeholder="Enter your email address..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-text" id="basic-addon2">JOIN OUR WAITING LIST</span>
                </div>
                
            </form>

        </div>
    )
}

export default InputField;