import React from "react";
import "./forms.css";
import { Field } from "redux-form";
import Alerterror from "../Main/CommonComonents/Alerterror";

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
        <>
            {hasError ? (
                <div style={{ position: "relative" }}>
                    <Alerterror text={meta.error} class={props.class} />
                </div>
            ) : null}
            <div className="formBlock">
                <input
                    type={props.type}
                    {...input}
                    {...restProps}
                    className={hasError || error ? inputFieldError : inputField}
                />
            </div>
        </>
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
            <>
                {hasError ? (
                    <div style={{ position: "relative" }}>
                        <Alerterror text={meta.error} class={props.class} />
                    </div>
                ) : null}
                <div className="formBlock">
                    <textarea
                        type={props.type}
                        {...input}
                        {...restProps}
                        className={
                            hasError || error ? inputFieldError : inputField
                        }
                        onInput={this.auto_grow(this)}
                    />
                </div>
            </>
        );
    }
}
export default Textarea;
