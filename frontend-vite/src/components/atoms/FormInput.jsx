import React from 'react'

export default function FormInput(props) {
    return (
        <div className='mt-6'>

            <div className="field" align="left">
                <label className="label" >{props.fieldLabel}</label>
                <div className="control has-icons-left">
                    <input

                        defaultValue={props.value}
                        onChange={props.onChange}
                        className="input is-success"
                        type="text"
                        name={props.name}
                        placeholder={props.placeholder}
                    />

                    <span className="icon is-small is-left">
                        <i className={props.iconClass}></i>
                    </span>

                </div>
            </div>

        </div>
    )
}
