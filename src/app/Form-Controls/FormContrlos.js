import React from "react";
import { Field } from "redux-form";

export const createField = (
    placeholder,
    name,
    validators,
    component,
    props = {},
    text = ""
) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />{" "}
        {text}
    </div>
);

export const Input = ({ error, inputField, inputFieldError, ...props }) => {
    const { input, meta, ...restProps } = props;
    const hasError = meta.error && meta.touched;
    return (
        <div className="formBlock">
            {hasError ? (
                <div style={{ position: "relative" }}>
                    <div className="inputError">{meta.error}</div>
                </div>
            ) : null}
            <input
                type={props.type}
                {...input}
                {...restProps}
                className={hasError || error ? inputFieldError : inputField}
            />
        </div>
    );
};

class Textarea extends React.Component {
    auto_grow = (element) => {
        element.height = "5px";
        element.height = element.scrollHeight + "px";
    };
    render() {
        let { error, inputField, inputFieldError, ...props } = this.props;
        const { input, meta, ...restProps } = props;

        const hasError = meta.error && meta.touched;
        return (
            <div className="formBlock">
                {hasError ? (
                    <div className="inputError">{meta.error}</div>
                ) : null}
                <textarea
                    type={props.type}
                    {...input}
                    {...restProps}
                    className={hasError || error ? inputFieldError : inputField}
                    onInput={this.auto_grow(this)}
                />
            </div>
        );
    }
}
export default Textarea;
