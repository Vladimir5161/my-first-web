
import React from "react"
import { Field } from "redux-form"

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)

export const Input = ({ error, ...props }) => {
    const { input, meta, ...restProps } = props;
    const hasError = meta.error && meta.touched
    return (<div>
        {hasError ? <div className="inputError">{meta.error}</div> : null}
        <input type="text" {...input}{...restProps} className={(hasError || error) ? "inputFieldError" : "inputField"} />
    </div>
    )
}