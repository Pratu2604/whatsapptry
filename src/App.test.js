// import { render, screen } from '@testing-library/react';
// import App from './App';
// test('renders learn react link', () => {
// render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import onMsgSend from "./actions/sendMsg";

test("Check message types",()=>{

  const mockcalledback=jest.fn(onMsgSend);

  const myMessage={text:"Hii",time:"10:12 PM", sentBy:"me"}

  // const ExpectedResult=[[myMessage]];

  mockcalledback(myMessage);

  expect(typeof(mockcalledback.mock.calls[0][0])).toEqual('object');
  
  // console.log(mockcalledback.mock.calls[0][0].sentBy);

  expect(typeof(mockcalledback.mock.calls[0][0].text)).toEqual("string");

  expect(typeof(mockcalledback.mock.calls[0][0].time)).toEqual("string");

})

test("Check messages",()=>{

  const mockcalledback=jest.fn(onMsgSend);

  const myMessage={text:"Hii",time:"10:12 PM", sentBy:"me"}

  const ExpectedResult=[[myMessage]];

  mockcalledback(myMessage);

  expect(typeof(mockcalledback.mock.calls[0][0])).toEqual('object');
  
  // console.log(mockcalledback.mock.calls[0][0].sentBy);

  expect(typeof(mockcalledback.mock.calls[0][0].text)).toEqual("string");

  expect(typeof(mockcalledback.mock.calls[0][0].time)).toEqual("string");

})
