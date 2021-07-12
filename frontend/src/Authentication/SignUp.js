import { useState } from "react";
import '../Resources/signIn.css'

const SignUp = () => {

    const [id, setId] = useState(null);

    const [data, setData] = useState(
        {
            firstname: "",
            lastname: "",
            street_no: "",
            street: "",
            city: "",
            province: "",
            email: "",
            contact: "",
            birthday: "",
            gender: ""
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = "/"

        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setId(data);
            })
    }

    console.log(id);

    return (

        <div className="form-signup">
            <form onSubmit={handleSubmit} className="row-g3">
                <div className="text-center" >
                    <img className="mb-4" src="logo_icon.png" alt="" width="72" height="72" />
                </div>
                <h1 className="text-center h3 mb-3 fw-normal">Sign Up</h1>

                <div className="col-md-3">

                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        aria-describedby="firstName"
                        placeholder="First Name"
                        value={data.firstname}
                        onChange={(e) => setData({ ...data, firstname: e.target.value })}
                        required
                    />
                </div>

                <div className="col-md-9">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        
                        id="lastName"
                        value={data.lastname}
                        onChange={(e) => setData({ ...data, lastname: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Street No</label>
                    <input
                        type="text"
                        className="form-control"
                        id="streetNo"
                        value={data.street_no}
                        onChange={(e) => setData({ ...data, street_no: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Street</label>
                    <input
                        type="text"
                        className="form-control"
                        id="streetName"
                        value={data.street}
                        onChange={(e) => setData({ ...data, street: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cityName"
                        value={data.city}
                        onChange={(e) => setData({ ...data, city: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Province</label>
                    <input
                        type="text"
                        className="form-control"
                        id="provinceName"
                        value={data.province}
                        onChange={(e) => setData({ ...data, province: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contact"
                        value={data.contact}
                        onChange={(e) => setData({ ...data, contact: e.target.value })}
                        required
                    />
                </div>

                <div className="selectors">
                    <div>
                        <label>Birthday</label>
                        <input
                            type="date"
                            className="form-control"
                            id="birthday"
                            value={data.birthday}
                            onChange={(e) => setData({ ...data, birthday: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label>Gender</label>
                        <select
                            className="form-control"

                            value={data.gender}
                            onChange={(e) => setData({ ...data, gender: e.target.value })}
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>

                <input type="submit" className="w-100 btn btn-dark" value="Sign Up" />
            </form>
        </div>

    );
}

export default SignUp;