import React, { useState, createRef } from "react";
import axios from "axios";

export const Upload = props => {
  const [keyLink, setKeyLink] = useState("");
  const fileRef = createRef();

  const handleSubmit = e => {
      setKeyLink("")
    const data = new FormData();
    data.append('file', fileRef.current.files[0])
    axios.post("https://file.io", data)
    .then(({data}) => setKeyLink(data.link))
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileRef} />
        <input type="submit" value="Submit" />
      </form>
      <br/>
      {keyLink}
    </div>
  );
};
