const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//product = 

//key = 

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, firstName: username},
        {headers: {"private-key": "privte key fom chat-engine"}}
    )
    return res.status(r.status).json(r.data)
  } catch (err) {
    return res.status(err.response.status).json(err.response.data)

  }
});

app.listen(3001, () => {
    console.log("listening to port 3001")
});