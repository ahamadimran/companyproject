import React from "react";
import { useForm } from "react-hook-form";
import Navigation from '../components/Navigation'
import { useState } from "react";


//from https://www.freecodecamp.org/news/how-to-create-forms-in-react-using-react-hook-form/

export default function CompanyForm2() {
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            let res = await fetch("http://localhost:5000/api/company/create/", {
                method: "POST",
                body: JSON.stringify(data),
            });
            let resJson = await res.json();

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
                                placeholder="Name"
                                {...register("name")}
                            />
                        </div>
                    </div>

                    <div class="field" align="left">
                        <label class="label" >Description</label>
                        <textarea class="textarea is-success"
                            placeholder="e.g. Hello world"
                            {...register("description")}
                        ></textarea>
                    </div>


                    <div class="field" align="left">
                        <label class="label" >Logo</label>
                        <input class="input is-success"
                            placeholder="e.g. Hello world"
                            {...register("logo")}
                        />
                    </div>

                    <div class="field" align="left">
                        <label class="label">Location</label>
                        <div class="control has-icons-left">
                            <input class="input is-success"
                                type="text"
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
