import { DELETE_SV, EDIT_SV, SEARCH_SV, SUBMIT_SV } from "./type"

export const actionSubmitSV = (payload) => {
    return {
        type: SUBMIT_SV,
        payload
    }
}

export const actionDeleteSV = (payload) => {
    return {
        type: DELETE_SV,
        payload
    }
}

export const actionSearchSV = (payload) => {
    return {
        type: SEARCH_SV,
        payload
    }
}

export const actionEditSV = (payload) => {
    return {
        type: EDIT_SV,
        payload
    }
}

