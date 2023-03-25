import React, { Component } from "react";
import { connect } from "react-redux";
import { actionSubmitSV } from "./duck/action";

export class FormDangKy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    };

    this.resetForm = React.createRef();
  }

  handleOnchange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.resetForm.current.reset();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editedUser) {
      this.setState({
        ...nextProps.editedUser,
      });
    } else {
      this.setState({
        maSV: "",
        hoTen: "",
        email: "",
        soDienThoai: "",
      });
    }
  }
 
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit} ref={this.resetForm}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    onChange={this.handleOnchange}
                    value={this.state.maSV}
                  ></input>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleOnchange}
                    value={this.state.hoTen}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    onChange={this.handleOnchange}
                    value={this.state.soDienThoai}
                  ></input>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    className="form-control"
                    name="email"
                    onChange={this.handleOnchange}
                    value={this.state.email}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-left">
                  <button  type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editedUser: state.quanLySinhVienReducer.editedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (sv) => {
      dispatch(actionSubmitSV(sv));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy);
