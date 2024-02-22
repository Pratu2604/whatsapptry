import { setMessage } from "../feature/counter/contactSlice";

function onMsgSend(msg) {
  return (dispatch, getState) => {
    const selectedState = getState().contact.selectedState;
    const contactState = getState().contact.contactState;

    let msgarr = [...selectedState.message];
    msgarr.push(msg);
    let index = contactState.findIndex(
      (contact) => contact.contact_no === selectedState.contact_no
    );

    dispatch(setMessage({ index, msgarr }));
  };
}
export default onMsgSend;
