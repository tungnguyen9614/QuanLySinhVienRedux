import React, { Component } from "react";
import { connect } from "react-redux";
import { actionDeleteSV, actionEditSV } from "./duck/action";

export class TableSinhVien extends Component {
  renderSinhVien = () => {
    let { mangSinhVien,deleteSV,keyword,editSV } = this.props;

    mangSinhVien = mangSinhVien.filter((sv) => {
      return sv.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return mangSinhVien.map((sv)=>{
      return <tr key={sv.maSV}>
        <td>{sv.maSV}</td>
        <td>{sv.hoTen}</td>
        <td>{sv.soDienThoai}</td>
        <td>{sv.email}</td>
        <td>
          <button className="btn btn-info mr-3" onClick={()=>{editSV(sv)}}>Chỉnh sửa</button>
          <button className="btn btn-danger" onClick={()=>{deleteSV(sv.maSV)}}>Xóa</button>
        </td>
      </tr>
    })
  }

  render() {

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <td>Mã SV</td>
              <td>Họ tên</td>
              <td>Số điện thoại</td>
              <td>Email</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
              {this.renderSinhVien()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.quanLySinhVienReducer.mangSinhVien,
    keyword: state.quanLySinhVienReducer.keyword
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSV : (id) => {
      dispatch(actionDeleteSV(id));
    },

    editSV : (sv) => {
      dispatch(actionEditSV(sv))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableSinhVien);
