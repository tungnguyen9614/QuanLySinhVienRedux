import React, { Component } from "react";
import FormDangKy from "./FormDangKy";
import Search from "./Search";
import TableSinhVien from "./TableSinhVien";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <FormDangKy />

        <div className="my-4">
          <Search />
        </div>

        <TableSinhVien />
      </div>
    );
  }
}

export default Home;
