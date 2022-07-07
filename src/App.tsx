import React, { FC } from 'react';
import { Component, useState } from 'react';
import { QRCodeSVG } from "qrcode.react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

export interface Information {
  phone: number;
  amount: number;
  note: string;
  deepLink: string;
}

const App: FC = () => {
  const [phone, setPhone] = useState<Information | any>({
    phone: 9518370888
  });
  const [amount, setAmount] = useState<Information | any>({
    amount: 100
  });
  const [note, setNote] = useState<Information | any>({
    note: "Thank you!"
  });
  const [deepLink, setDeepLink] = useState<Information | any>({
    deepLink: "To generate a valid QR code and deeplink, finish filling out the form."
  });

  function copy(text: string){
    navigator.clipboard.writeText(text)
  }

  function handleDeepLinkChange(){
    if(typeof(deepLink) === "object"){
      setDeepLink("To generate a valid QR code and deeplink, finish filling out the form.");
    }
    if(typeof(phone) === "object") setDeepLink("To generate a valid QR code and deeplink, finish filling out the form.");
    if(typeof(amount) === "object") setDeepLink("To generate a valid QR code and deeplink, finish filling out the form.");
    if(typeof(note) === "object") setDeepLink("To generate a valid QR code and deeplink, finish filling out the form.");
  }

  const notify = () => toast.success("successful copy!", {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  return (
        <div className="state-holder">
        <div>
          <h1>Sendmo</h1>
          <h4>Venmo deeplink/QR generator for one-click Venmo payments</h4>
        </div>
          <div className="phone-container"><label>Phone <input type="tel" placeholder="9518370888" onChange={(e) => {setPhone(e.target.value); setDeepLink("venmo://paycharge?txn=pay&recipients="+e.target.value+"&amount="+amount+"&note="+note);handleDeepLinkChange();}}></input></label></div>
          <div className="amount-container"><label>Amount <input type="number" placeholder="100.00" onChange={(e) => {setAmount(e.target.value); setDeepLink("venmo://paycharge?txn=pay&recipients="+phone+"&amount="+e.target.value+"&note="+note);handleDeepLinkChange();}}></input></label></div>
          <div className="note-container"><label>Note <input type="text" placeholder="thanks" onChange={(e) => {setNote(encodeURIComponent(e.target.value)); setDeepLink("venmo://paycharge?txn=pay&recipients="+phone+"&amount="+amount+"&note="+encodeURIComponent(e.target.value)); handleDeepLinkChange();}}></input></label></div>
          <div>{
                typeof(deepLink) === "object" ? setDeepLink("To generate a valid QR code and deeplink, finish filling out the form.") : `${deepLink}`
                }
          </div>
          <div><button onClick={() => {copy(deepLink); notify();}}>COPY DEEPLINK</button><ToastContainer /></div>
          <QRCodeSVG value={deepLink} />
          <div className="qr-note"><h4>Scan the QR above to open a Venmo payment on your phone</h4></div>
        </div>
  );
};

export default App;