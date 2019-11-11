import React, {Component} from "react"
import Fuse from "fuse.js"
import NumbersList from "./NumbersList"

export default class Search extends Component{
    state = {
        resultNumbers: [],
        searchText: "",
        limit: this.props.resultsMaxLimit
    }
    
    componentDidMount(){
        const options = {
            keys: 
            [
                {
                    name: "title",
                    weight: 1
                }
            ]
        }
        
        this.fuse = new Fuse(this.props.db, options)
    }

    addLimit = (count) => {
        this.setState((prevState) => ({limit: prevState.limit + count}))
    }  

    searchInputChangeHandler = (e) =>{
        const newSearchText = e.target.value;

        if(newSearchText.trim() !== this.state.searchText.trim()){
            this.setState((prevState) => ({
                searchText: newSearchText,
                resultNumbers: this.fuse.search(newSearchText),
                limit: newSearchText.length === 0 ? 5 : prevState.limit
            }))
        }
    }

    render(){
        const limit = this.state.limit;
        const result = this.state.resultNumbers;
        let add = null;

        if(result.length > limit){
            add = result.length - limit > 10 ? 10 : result.length - limit;            
        }

        return (
        <div>
            <input onChange={this.searchInputChangeHandler}/>
            <NumbersList numbers={this.state.resultNumbers.slice(0, this.state.limit)} searchText={this.state.searchText}/>
            {add && <button onClick={() => this.addLimit(add)}>{`Show ${add}`}</button>}
        </div>
        )
    }
}