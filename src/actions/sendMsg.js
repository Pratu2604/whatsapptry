// import { setMessage } from "../feature/counter/contactSlice";

// function onMsgSend(msg) {
//   return (dispatch, getState) => {
    
//     const selectedState = getState().contact.selectedState;
//     const contactState = getState().contact.contactState;
//     const Index= contactState.findIndex(
//       (contact) => contact.id === selectedState
//     );
//     console.log(Index)
//     console.log(msg);


//     let msgarr = [...contactState[Index].message];
//     msgarr.push(msg);

//     dispatch(setMessage({ Index, msgarr }));
//   };
// }
// export default onMsgSend;
