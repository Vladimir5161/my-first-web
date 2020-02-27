import { Field } from "redux-form"
import React from "react"

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    const hasError = meta.error && meta.touched
    return (<div>
        <input type="text" {...input}{...restProps} className={hasError ? "inputFieldError" : "inputField"} />
        {hasError ? <div className="inputError">{meta.error}</div> : null}
    </div>
    )
}