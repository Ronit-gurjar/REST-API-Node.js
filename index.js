//Code for our rest api
//importing express which is also a function
const app = require("express")();
const PORT = 8080;

//Defined a port for on server to listen our API
app.listen(PORT, () => console.log(`he's alive on http://localhost:${PORT}`));

//creating an endpoint
app.get(
  "/some" /*ROUTE*/,
  (req, res) => {
    res.status(200).send({
      some: "yo",
      where: "there",
    });
  } /*HANDLER*/
);

//Post Endpoint with a Route parameters for capturing synamic values in the URL
app.post("/some/:id ");
