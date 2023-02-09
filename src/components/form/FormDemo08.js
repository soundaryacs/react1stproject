import React, { useState } from "react";

export default function FormDemo8() {
    const [fname, setFname] = useState("First Name");
    const [lname, setLname] = useState("Last Name");
    const [email, setEmail] = useState("xx@gmail.com");
    const [phone, setPhone] = useState("9788909987");
    const [message, setMessage] = useState("Text area");

    const submitHandler = (e) => {
        e.preventDefault();
        alert(fname + ' ' + lname + ' ' + email + ' ' + phone + ' ' + message);
    };

    return (
        <>
            <div className="container m-5">
                <div className="container">
                    <div className="row">
                       
                    </div>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-sm-12 ps-3">
                            <img src="https://pub-static.fotor.com/assets/projects/pages/3e1f62bcaa7b4a7db662d6064dd1f38e/600w/university-debate-competition-event-823c695cd57346e9870aaa6bd722c49b.jpg" alt="Test Img" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                        <h1 className="pb-2 pt-2">Registration Form</h1>
                            <form onSubmit={submitHandler}>
                                First Name:
                                <input name="fname" value={fname} onChange={(e) => setFname(e.target.value)} className="form-control" /><br />
                                Last Name:
                                <input name="lname" value={lname} onChange={(e) => setLname(e.target.value)} className="form-control" />
                                <br />
                                Email ID:
                                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                <br />
                                Phone Number:
                                <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                                <br />
                                Phone Number:
                                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" />
                                <br />
                                <br />
                                <button>submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}