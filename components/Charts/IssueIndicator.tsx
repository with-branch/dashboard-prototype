import React from "react";
import { GoPrimitiveDot } from "react-icons/go"


export default function IssueIndicator() {

    return (
        <div className="absolute top-4 left-4">
            <GoPrimitiveDot className="text-4xl text-red-400" />
        </div>
    )
}