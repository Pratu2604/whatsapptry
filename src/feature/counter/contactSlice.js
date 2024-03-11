// import { createSlice } from "@reduxjs/toolkit";

// Define a type for your object

// type msgObject={
//   text:string,
//   time:string,
// }
// type myObject = {
//   id: number;
//   name: string;
//   contact_no: string,
//   message:msgObject[],
// };

// // // // Declare an array of objects of type MyObject
// // // let myArray: MyObject[] = [];

// // // // Add objects to the array
// // // myArray.push({ id: 1, name: "Object 1" });
// // // myArray.push({ id: 2, name: "Object 2" });
// // // // Add more objects as needed

// // // // Access elements in the array
// // // console.log(myArray[0].name); // Output: Object 1
// // // console.log(myArray[1].id);   // Output: 2


// // interface Contact {
// //   contactState:myObject[];
// //   selectedState: any;
// // }

// const initialState  = {
//   contactState: [
//     {
//       id: 1,
//       name: "Pratiksha",
//       contact_no: "9785766685",
//       message: [{ text: "Hey Pratiksha", time: "10:10 AM" }],
//     },
//     {
//       id: 2,
//       name: "Pruthvi",
//       contact_no: "9785066685",
//       message: [{ text: "Hey Pruthvi", time: "10:11 AM" }],
//     },
//     {
//       id: 3,
//       name: "Pranjal",
//       contact_no: "9985766685",
//       message: [{ text: "Hey Pranjal", time: "10:12 AM" }],
//     },
//     {
//       id: 4,
//       name: "Trupti",
//       contact_no: "9885766685",
//       message: [
//         { text: "Hey Trupti", time: "10:13 AM" },
//         { text: "Hii", time: "12:56 PM" },
//       ],
//     },
//     {
//       id: 5,
//       name: "Prerana",
//       contact_no: "8785766685",
//       message: [
//         { text: "Hey Prerana", time: "10:14 AM" },
//         { text: "How are you??", time: "05:12 PM" },
//       ],
//     },
//     {
//       id: 6,
//       name: "Abhinandan",
//       contact_no: "7785766685",
//       message: [{ text: "Hey Abhinandan", time: "10:15 AM" }],
//     },
//     {
//       id: 7,
//       name: "Abhishek",
//       contact_no: "7085766685",
//       message: [{ text: "Hey Abhishek", time: "10:16 AM" }],
//     },
//     {
//       id: 8,
//       name: "Mehvish",
//       contact_no: "8885766685",
//       message: [{ text: "Hey Mehvish", time: "10:17 AM" }],
//     },
//     {
//       id: 9,
//       name: "Nupur",
//       contact_no: "9785786685",
//       message: [{ text: "Hey Nupur", time: "10:18 AM" }],
//     },
//     {
//       id: 10,
//       name: "Shital",
//       contact_no: "8997857685",
//       message: [{ text: "Hey Shital", time: "10:19 AM" }],
//     },
//     {
//       id: 11,
//       name: "Shruti",
//       contact_no: "7785766995",
//       message: [{ text: "Hey Shruti", time: "10:20 AM" }],
//     },
//   ],
//   selectedState: null,
// };

// export const contactSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     setSelectedState: (state, action) => {
//       console.log("$$$$$$$$$$$$", action.payload);
//       state.selectedState = action.payload;
//     },
//     setMessage: (state, action) => {
//       state.contactState[action.payload.Index].message = action.payload.msgarr;
//     },
//     setContactState: (state, action) => {
//       state.contactState = action.payload;
//     },
//   },
// });

// export const { setSelectedState, setContactState, setMessage } = contactSlice.actions;

// export default contactSlice.reducer;