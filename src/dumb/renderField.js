import React from "react"
// import * as validations from "../validation"

export const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="input-wrap">
      <input className={touched && (error || warning) && "error"}
             {...input} placeholder={label} type={type}/>
      {/*{props.touched && props.error && !props.disabled && <span className="error">{props.error}</span>}*/}
    </div>
);


export const renderTextarea = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className="input-wrap">
      <textarea className={touched && (error || warning) && "error"}
             {...input} placeholder={label} type={type}/>
      {/*{props.touched && props.error && !props.disabled && <span className="error">{props.error}</span>}*/}
    </div>
);