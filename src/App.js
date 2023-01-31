import React from "react"
import Data from "./Data"
import Header from "./components/Header"
import Articles from "./components/Articles"

export default function App() {
    const articles = Data.map(infos => {
        return(
            <Articles
            key={infos.id}
            {...infos}
            />
        )
    })
        return (
            <div>
            <Header/>
            {articles}
        
            </div>
        )
}