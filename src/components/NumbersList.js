import React from "react"
import Number from "./Number"

const NumbersList = props => (
    <div>
        {props.numbers.length === 0 
        ?
        props.searchText.length !== 0
        ?
        <p>No results</p>
        :
        <p>Type something to search</p>
        :
        props.numbers.map((number, index) => (
            <Number 
                key={index}
                title={number.title}
                phone={number.phone}
            />
        ))}
    </div>
)

export default NumbersList