import express from "express";
const app = express();
//
//
app.get("/", (req, res) => {
  res.json(
    // to send response for get request
    {
      message: "this is get request",
    }
  );
});

app.delete("/", (req, res) => {
  res.json(
    // to send response for delete request
    {
      message: "this is delete request",
    }
  );
});

app.post("/", (req, res) => {
  res.json(
    // to send response for post request
    {
      message: "this is post request",
    }
  );
});

app.put("/", (req, res) => {
  res.json(
    // to send response for put request
    {
      message: "this is put request",
    }
  );
});

//
//

app.listen(3000, () => {
  // create one time funtion
  console.log("Server is running on port 3000");
}); //to run backend code

//nodemon - to automatically restart server on code changes
