import { useState } from "react";
import axios from "axios";

function Work() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  const handleWrite = async () => {
    await axios.post("http://localhost:5000/write", {
      text: text,
    });
    alert("Data Written!");
  };

  const handleRead = async () => {
    const res = await axios.get("http://localhost:5000/read");
    setData(res.data.data);
  };

  return (
    <div>
      <h2>FS Work with React</h2>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleWrite}>Write</button>
      <button onClick={handleRead}>Read</button>

      <p>{data}</p>
    </div>
  );
}

export default Work;
