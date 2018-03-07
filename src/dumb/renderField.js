import React from "react"

export const renderField = (props) => (
    <div className="input-row asdffdss">
      <input type="text" {...props} onChange={e => this.props.livetext(e.target.value)}/>
      {props.touched && props.error && !props.disabled && <span className="error">{props.error}</span>}
    </div>
);