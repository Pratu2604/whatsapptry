import { setMessage } from "../feature/counter/contactSlice.ts";
import { Dispatch } from "@reduxjs/toolkit";
// import { GetState } from "@reduxjs/toolkit";


function onMsgSend(msg:object): any {
  // console.log(msg)
  return (dispatch:Dispatch, getState:any) => {
    const selectedState:number = getState().contact.selectedState;
    // console.log(typeof msg)
    const contactState:any= getState().contact.contactState;
    // console.log(typeof getState())
    // console.log(typeof contactState)


    const Index:number= contactState.findIndex(
      (contact:any) => contact.id === selectedState
    );
    // console.log(typeof Index)

    let msgarr:any = [...contactState[Index].message];
    msgarr.push(msg);
    // console.log(typeof msgarr)

    dispatch(setMessage({ Index, msgarr }));
  };
}
export default onMsgSend;
