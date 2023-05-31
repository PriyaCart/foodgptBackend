const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var corsoption = { origin: "http://localhost:3000" };
app.use(cors(corsoption));

const PORT = 9000;
const HOST = "localhost";

require("./router/index")(app);  

// app.get("/api", async(req,res) =>{
//     try {
//         const token = 'AAAAAAAAAAAAAAAAAAAAALlxlgEAAAAA45wV%2FfxSN3K5L6VVRN530d6HzGo%3DQ0acG2vHy3zmSQsgedBwRm8q5OTHGIz0MzneABV7mwId57yByl'
//         console.log("Twitter");
//         const id = req.query.id;
//         console.log(id,  "Twitter Id")
//         const value =await axios.get(`https://api.twitter.com/2/tweets/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           },
//         });
//         console.log(value.data, "success")
//         return res.send(value.data)
        
//       } catch (error) {
//         console.log(error, "err")
//       }

//   })


app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
