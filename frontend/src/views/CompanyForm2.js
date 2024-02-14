import React from "react";
import { useForm } from "react-hook-form";
import Navigation from '../components/Navigation'
import { useState } from "react";
import axios from "axios";

import FileUploadSingle from '../components/FileUpload';


//from https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

export default function CompanyForm2() {
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = async (data) => {
        console.log(JSON.stringify(data));

        try {

            let res = await fetch("http://localhost:5000/api/company/create/", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }, 
            });


            // axios.post{
            //     "http://localhost:5000/api/company/create/",

            // };

            let resJson = await res.json(data);

            console.log(resJson);
            if (resJson.status === 200) {
                setMessage("Data entered successfully");
            } else {
                setMessage(res.message);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="field" align="left">
                        <label class="label" >Name</label>
                        <div class="control">
                            <input class="input is-success"
                                type="text"
                                name="name"
                                placeholder="Name"
                                {...register("name")}
                            />
                        </div>
                    </div>

                    <div class="field" align="left">
                        <label class="label" >Description</label>
                        <textarea class="textarea is-success"
                        name="description"
                            placeholder="e.g. Hello world"
                            {...register("description")}
                        ></textarea>
                    </div>


                    <div class="field" align="left">
                        <label class="label" >Logo</label>


                        <div class="file is-primary">
                            <label class="file-label">

                                {/* <input class="file-input" type="file" name="logo" /> */}

                                <input class="input is-success"
                                    type="text"
                                    name="logo"
                                    placeholder="Logo"
                                    {...register("logo")}
                                />

                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose a file…
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="field" align="left">
                        <label class="label">Location</label>
                        <div class="control has-icons-left">
                            <input class="input is-success"
                                type="text"
                                name="location"
                                placeholder="Street, City, State"
                                {...register("location")}
                            />
                            <span class="icon is-small is-left">
                                <i class="fa fa-map-marker"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field" align="left">
                        <label class="label">Category</label>
                        <div class="control has-icons-left">
                            <input class="input is-success"
                                type="text"
                                name="category"
                                placeholder="Software"
                                {...register("category")}
                            />
                        </div>
                    </div>

                    <button class="button is-primary" type="submit">Create</button>
                    <div className="message mt-6">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>

        </div>
    );
}
