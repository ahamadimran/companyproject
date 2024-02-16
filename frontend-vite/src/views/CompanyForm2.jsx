import React, { forwardRef, useEffect, useRef } from "react";
import { useState } from "react";
import Stepper, { Step } from '../components/atoms/Stepper'
import { Toast, useToast } from "../components/atoms/Toast";
import MyTagsField from "../components/atoms/TagFields";
import FormInput from "../components/atoms/FormInput";


const Tags = forwardRef(({ placeholder, onChange, value }, ref) => {
    const tagFieldRef = useRef()
    useEffect(() => {
        const tagField = new MyTagsField(onChange, tagFieldRef.current)
        value && value.map((val) => tagField.addTag(val))
        if (ref)
            ref.current = tagField
    }, [])

    return (
        <div ref={tagFieldRef} className="tagsfield field input is-grouped is-grouped-multiline">
            <div>
                <input type="hidden"></input>
                <span placeholder={placeholder} contentEditable></span>
            </div>

        </div>
    )
})

export default function CompanyForm2() {
    const [formState, setFormState] = useState({})
    const toast = useToast()

    const onSubmit = async (e) => {

        try {
            e.preventDefault()
            const formData = new FormData();
            Object.entries(formState).forEach(([key, value]) => formData.append(key, value))
            console.log(formData)

            let res = await fetch("http://localhost:5000/api/company/create/", {
                method: "POST",
                body: formData,

            });

            if (res.status === 200) {
                toast.show.normal({ duration: 2000, message: "Data entered successfully", type: "success" })
            } else {
                toast.show.normal({ duration: 2000, message: res.message, type: "error" })
            }
        } catch (err) {
            toast.show.normal({ duration: 2000, message: err.message, type: "error" })
        }
    };

    const buttonTemplate = (e) => e.isEnd && <button className="button is-primary" type="submit">Create</button>

    return (
        <div style={{ padding:200 }} >
            <section className="section is-small">
                <h1 className="title">Enlist Your Company</h1>
                <h2 className="subtitle">
                    Provide your company's information below.
                </h2>
            </section>


            <form onSubmit={onSubmit}>
                <Stepper buttonTemplate={buttonTemplate}>
                    <Step title={"Self Introduction"}>
                        <FormInput
                            value={formState.name}
                            fieldLabel={"Company Name"}
                            name={"name"}
                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                            placeholder={"Example Pvt. Ltd."}
                            iconClass={"fa fa-building"}
                        />
                        <FormInput
                            value={formState.website}
                            fieldLabel={"Website"}
                            name={"website"}
                            onChange={(e) => setFormState(prev => ({ ...prev, website: e.target.value }))}
                            placeholder={"www.example.com"}
                            iconClass={"fa fa-globe"}
                        />
                        <FormInput
                            value={formState.description}
                            fieldLabel={"Short Description"}
                            name={"description"}
                            onChange={(e) => setFormState(prev => ({ ...prev, description: e.target.value }))}
                            placeholder={"We are a Great Company."}
                            iconClass={"fa fa-map-marker"}
                        />
                    </Step>

                    <Step title={"About Company"}>
                        <div className="field" align="left">
                            <label className="label" >Full Description</label>
                            <textarea
                                value={formState.fdescription}
                                onChange={(e) => setFormState(prev => ({ ...prev, fdescription: e.target.value }))}
                                className="textarea is-success"
                                name="Full Description"
                                placeholder="e.g. Hello world"
                            ></textarea>
                        </div>

                        <div class="file is-centered is-boxed is-success has-name" style={{ marginTop: 50 }}>
                            <label class="file-label">
                                <input
                                    class="file-input"
                                    type="file"
                                    name="myfile"
                                    onChange={(e) => setFormState(prev => ({ ...prev, myfile: e.target.files[0] }))}
                                />
                                <span class="file-cta">
                                    <span class="file-icon">
                                        <i class="fa fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                        Choose Logo File…
                                    </span>
                                </span>
                                <span class="file-name">
                                    {formState?.myfile?.name}</span>
                            </label>
                        </div>


                        <FormInput
                            value={formState.location}
                            fieldLabel={"Location"}
                            name={"location"}
                            onChange={(e) => setFormState(prev => ({ ...prev, location: e.target.value }))}
                            placeholder={"Street, City, State"}
                            iconClass={"fa fa-map-marker"}
                        />

                        <div className="field mt-6" align="left">
                            <label className="label">Services</label>
                            <div className="control has-icons-left">
                                <Tags
                                    value={formState.services}
                                    onChange={(e) => setFormState(prev => ({ ...prev, services: e }))}></Tags>
                            </div>

                            <p className="help mt-4">
                                Enter-separated, minimum one
                            </p>
                        </div>

                    </Step>

                    <Step title={"Basic Information"}>

                        <FormInput
                            value={formState.location}
                            fieldLabel={"Location"}
                            name={"location"}
                            onChange={(e) => setFormState(prev => ({ ...prev, location: e.target.value }))}
                            placeholder={"Street, City, State"}
                            iconClass={"fa fa-map-marker"}
                        />

                        <FormInput
                            value={formState.location}
                            fieldLabel={"Location"}
                            name={"location"}
                            onChange={(e) => setFormState(prev => ({ ...prev, location: e.target.value }))}
                            placeholder={"Street, City, State"}
                            iconClass={"fa fa-map-marker"}
                        />

                        <FormInput
                            value={formState.location}
                            fieldLabel={"Location"}
                            name={"location"}
                            onChange={(e) => setFormState(prev => ({ ...prev, location: e.target.value }))}
                            placeholder={"Street, City, State"}
                            iconClass={"fa fa-map-marker"}
                        />

                        <FormInput
                            value={formState.location}
                            fieldLabel={"Location"}
                            name={"location"}
                            onChange={(e) => setFormState(prev => ({ ...prev, location: e.target.value }))}
                            placeholder={"Street, City, State"}
                            iconClass={"fa fa-map-marker"}
                        />







                    </Step>
                </Stepper>
            </form>
        </div>
    );
}
