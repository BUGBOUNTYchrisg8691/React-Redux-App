import Axios from "axios";
import { BASE_URL } from "../constants";

export const FETCH_DATA = "SET_DATA";

export function fetchData(data) {
  return {
    type: FETCH_DATA,
    payload: data,
  };
}

//export function fetchData() {
//return (dispatch) => {
//return Axios.get(BASE_URL)
//.then((resp) => dispatch(setData(data)))
//.catch((err) => {
//debugger;
//});
//};
//}
