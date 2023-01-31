import React from "react"
import logo from "../../public/images/logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={logo} className="logo"/>
            <p className="mainTitle">my travel journal</p>
        </div>
    )
}