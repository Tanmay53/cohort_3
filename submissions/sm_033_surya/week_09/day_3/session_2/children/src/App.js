import React from 'react';
import logo from './logo.svg';
import './App.css';

const Inboxc = () => {

  return (
    <div className="row">
      <div className="col-3"> <img src="https://via.placeholder.com/50" /></div>
      <div className="col-9"><h1>Inbox</h1></div>
    </div>
  )
}
const Starredc = () => {

  return (
    <div className="row">
      <div className="col-3"> <img src="https://via.placeholder.com/50" /></div>
      <div className="col-9"><h1>Starred</h1></div>
    </div>
  )
}

const Sendc = () => {

  return (
    <div className="row">
      <div className="col-3"> <img src="https://via.placeholder.com/50" /></div>
      <div className="col-9"><h1>Send</h1></div>
    </div>
  )
}

const Drawer = (props) => {
  return (
    <div className="col-3 border border-dark p-5">
      <div className="col-12 m-2" style={{ height: "70px" }}></div>
      <div className="col-12 my-2 p-2" style={{ border: "2px solid black" }}>
        <div className="col-12">
          {props.Inbox}
        </div>
        <div className="col-12">
          {props.Starred}
        </div>
        <div className="col-12">
          {props.Send}
        </div>
      </div>
      <div className="col-12 m-2" style={{ height: "70px" }}></div>
      <div className="col-12 my-2 p-2" style={{ border: "2px solid black" }}>
        <div className="col-12">
          {props.Inbox}
        </div>
        <div className="col-12">
          {props.Starred}
        </div>
        <div className="col-12">
          {props.Send}
        </div>
      </div>
      <div className="col-12 m-2" style={{ height: "70px" }}></div>
      <div className="col-12 my-2 p-2" style={{ border: "2px solid black" }}>
        <div className="col-12">
          {props.Inbox}
        </div>
        <div className="col-12">
          {props.Starred}
        </div>
        <div className="col-12">
          {props.Send}
        </div>
      </div>
    </div>
  )
}

const Navitem = (props) => {
  return (
    <>
      <div className="m-3">
        {props.children}
      </div>
    </>
  )
}

const style = {
  background: "blue",
  border: "2px solid black"
}

const Nav = () => {
  return (
    <>
      <div className="row" style={style}>
        <Navitem>
          <h1>LoGo</h1>
        </Navitem>
        <div className="col-5"></div>
        <Navitem>
          <div className="row">
            <div className="mx-4"><button style={{
              background:
                "none", border: "none"
            }}>home</button></div>
            <div className="mx-4"><button style={{
              background:
                "none", border: "none"
            }}>about</button></div>
            <div className="mx-4"><button style={{
              background:
                "none", border: "none"
            }}>products</button></div>
            <div className="mx-4"><button style={{
              background:
                "none", border: "none"
            }}>FAQ</button></div>
          </div>
        </Navitem>
      </div>
    </>
  )
}








function App() {
  return (
    <>
      <Nav />
      <Drawer Inbox={<Inboxc />} Starred={<Starredc />} Send={<Sendc />} />
    </>
  )
}

export default App;
