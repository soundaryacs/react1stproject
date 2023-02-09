import React, {useState} from 'react'

export default function RegisterForm() {
    const [user, setUser] = useState ({ fname: "", lname: "", email: "", phone:"" });
    

    const submitHandler = (e) => {
      e.preventDefault();
      console.log(user);
    };

   return (
      <>
        <form onSubmit={submitHandler}>
          First Name:
          <input
            name="fname"
            value={user.fname}
            onChange={(e) => setUser({ ...user, fname: e.target.value })}
          />
          <br />
          <br />
          Last Name:
          <input
            name="lname"
            value={user.lname}
            onChange={(e) => setUser({ ...user, lname: e.target.value })}
          />
          <br />
          <br />
           Email:
          <input
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <br />
          <br />
           Phone Number:
          <input
            name="phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <br />
          <br />
          state data: {user.fname + " " + user.lname + " " + user.email  + " " + user.phone}
          <button>submit</button>
        </form>
      </>
    );
}
