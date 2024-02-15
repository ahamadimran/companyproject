import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Stepper, { Step } from '../components/atoms/Stepper'

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

    const buttonTemplate = (e) => e.isEnd && <button className="button is-primary" type="submit">Create</button>



    return (

        <div style={{ padding: 70 }}>
            <section className="section is-small">
                <h1 className="title">Enlist Your Company</h1>
                <h2 className="subtitle">
                    Provide your company's information below.
                </h2>
            </section>


            <form onSubmit={handleSubmit(onSubmit)}>

                <Stepper buttonTemplate={buttonTemplate}>
                    <Step title={"Self Introduction"}>
                        <div className="field" align="left" style={{ marginTop: 50 }}>
                            <label className="label" >Name</label>
                            <div className="control">
                                <input className="input is-success"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    {...register("name")}
                                />
                            </div>
                        </div>

                        <div className="field" align="left">
                            <label className="label" >Description</label>
                            <textarea className="textarea is-success"
                                name="description"
                                placeholder="e.g. Hello world"
                                {...register("description")}
                            ></textarea>
                        </div>



                    </Step>

                    <Step title={"Basic Information"}>

                        <div className="field" align="left" style={{ marginTop: 50 }}>
                            <label className="label">Location</label>
                            <div className="control has-icons-left">
                                <input className="input is-success"
                                    type="text"
                                    name="location"
                                    placeholder="Street, City, State"
                                    {...register("location")}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-map-marker"></i>
                                </span>
                            </div>
                        </div>


                        <div className="field" align="left">
                            <label className="label">Category</label>
                            <div className="control has-icons-left">
                                <input className="input is-success"
                                    type="text"
                                    name="category"
                                    placeholder="Software"
                                    {...register("category")}
                                />
                            </div>
                        </div>

                    </Step>
                </Stepper>
            </form>
        </div>




    );

}



{/* <Step title={"Basic Information"}>

<div className="field" align="left">
    <label className="label" >Logo</label>


    <div className="file is-primary">
        <label className="file-label">
             <input className="file-input" type="file" name="logo" /> 
            <input className="input is-success"
                type="text"
                name="logo"
                placeholder="Logo"
                {...register("logo")}
            />
            <span className="file-cta">
                <span className="file-icon">
                    <i className="fa fa-upload"></i>
                </span>
                <span className="file-label">
                    Choose a file…
                </span>
            </span>
        </label>
    </div>
</div>
</Step> */}