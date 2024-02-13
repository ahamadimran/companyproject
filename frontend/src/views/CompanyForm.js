import React from 'react'
import Navigation from '../components/Navigation'
import { useState } from "react";



export default function CompanyForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <Navigation />

            <section class="section is-medium">
                <h1 class="title">Enlist Your Company</h1>
                <h2 class="subtitle">
                    Provide your company's information below.
                </h2>
            </section>
            <div class="container my-form">

                <form onSubmit={handleSubmit}>
                    <div class="field" align="left">
                        <label class="label" >Name</label>
                        <div class="control">
                            <input class="input"
                                type="text"
                                value={name}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>


                    <div class="field" align="left">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input"
                                type="text"
                                value={name}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <button class="button is-primary" type="submit">Create</button>
                    <div className="message mt-6">{message ? <p>{message}</p> : null}</div>
                </form>


            </div>


        </div>
    )
}
