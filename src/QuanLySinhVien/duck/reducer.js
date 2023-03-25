import {DELETE_SV, EDIT_SV, SEARCH_SV, SUBMIT_SV } from "./type";

const initialState = {
  mangSinhVien: [
    {
      maSV: "1",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "0909777666",
      email: "NguyenVanA@gmail.com",
    },
    {
      maSV: "2",
      hoTen: "Trần Thị B",
      soDienThoai: "0909111333",
      email: "TranThiB@gmail.com",
    },
  ],

  keyword: "",
  editedUser: null,
};

export const quanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SV: {
        const mangSinhVienClone = [...state.mangSinhVien];
        
        const index = mangSinhVienClone.findIndex(sv=>sv.maSV === action.payload.maSV)
        if(index !== -1) {
            mangSinhVienClone[index] = action.payload;
        }else {
            mangSinhVienClone.push(action.payload);
        }
        
        state.mangSinhVien = mangSinhVienClone;

        return {...state}
    }

    case DELETE_SV: {
        const mangSinhVienClone = [...state.mangSinhVien];
        const index = mangSinhVienClone.findIndex(item=> item.maSV === action.payload);
        if(index !== -1){
            mangSinhVienClone.splice(index,1);
        }

        state.mangSinhVien = mangSinhVienClone;

        return {...state}
    }

    case EDIT_SV: {
        state.editedUser = action.payload;
        return {...state}
    }

    case SEARCH_SV: {
        state.keyword = action.payload;
        return {...state}
    }

    default:
      return { ...state };
  }
};
