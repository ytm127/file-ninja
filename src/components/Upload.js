import React, { useState } from "react";
import axios from "axios";

export const Upload = props => {
  const [keyLink, setKeyLink] = useState("");
  const [message, setMessage] = useState("");


  const handleMessageChange = e => {
      setMessage(e.target.value)
  }

//   const handleFile = e => {
//       const formData = new FormData()
//   }

  const post = () => {
    // for now just remove previous each time...
    setKeyLink("");
    setMessage("")
    axios({
      method: "post",
      url: "https://file.io",
      data:`text=${message}`
    }).then(({ data }) => {
      setKeyLink(data.link);
    });
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleMessageChange} value={message}/>
      </div>
      <br />
      <button onClick={post}>press to send secret message</button>
      <br />
      <h6>{keyLink}</h6>
    </div>
  );
};
