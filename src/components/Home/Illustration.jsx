import React from "react"
import pic from "../illustration.png"

export default function Illustration() {
    return (
        <div className="illustration">
            <style type="text/css">
                {`
                    .illustration {
                        float: right;
                    }
                `}
            </style>
            <img src={pic} alt="illustration" height="500px" width="500px" />
        </div>
    )
}