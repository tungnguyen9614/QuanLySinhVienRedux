import React, { Component } from "react";
import { connect } from "react-redux";
import { actionSearchSV } from "./duck/action";

export class Search extends Component {
    handleOnchange = (event) => {
        this.props.onSearch(event.target.value);
    }

  render() {
    return (
      <div className="container d-flex align-items-center">
        <h5>Search:</h5>
        <input type="text" className="form-control w-50 ml-3" onChange={this.handleOnchange}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (keyword) => {
            dispatch(actionSearchSV(keyword))
        }
    }
}

export default connect(null,mapDispatchToProps) (Search);
