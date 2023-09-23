const http = require("http");
const Meetup = require("./controller");
const { getReqData } = require("./utils");

const PORT = 5000;

const server = http.createServer(async (req, res) => {

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
      // Respond with a 200 OK status and the necessary CORS headers
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      });
      res.end();
      return;
    }

  
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
  // /api/meetups : GET
  if (req.url.match(/^\/api\/meetups\/?$/) && req.method === "GET") {
    // get the meetups.
    const meetups = await new Meetup().getMeetups();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(meetups));
  }

  // /api/meetups/:id : GET
  else if (req.url.match(/\/api\/meetups\/([0-9]+)/) && req.method === "GET") {
    try {
      // get id from url
      const id = req.url.split("/")[3];
      // get meetup
      const meetup = await new Meetup().getMeetup(id);
      // set the status code and content-type
      // send the data
      res.end(JSON.stringify(meetup));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // /api/meetups/ : POST
  else if (req.url === "/api/meetups" && req.method === "POST") {
    let meetup_data = await getReqData(req);
    try {
      let meetup = await new Meetup().createMeetup(meetup_data);
      console.log(meetup);
      res.end(JSON.stringify(meetup));
    } catch (error) {
      console.error(error)
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // /api/meetups/:id : UPDATE
  else if (
    req.url.match(/\/api\/meetups\/([0-9]+)/) &&
    req.method === "PATCH"
  ) {
    try {
      // get the id from the url
      const id = req.url.split("/")[3];
      // update meetup
      let updated_meetup = await new Meetup().updateMeetup(id);
      // set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      // send the message
      res.end(JSON.stringify(updated_meetup));
    } catch (error) {
      // set the status code and content type
      res.writeHead(404, { "Content-Type": "application/json" });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // /api/meetups/:id : DELETE
  else if (
    req.url.match(/\/api\/meetups\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    try {
      // get the id from url
      const id = req.url.split("/")[3];
      // delete meetup
      let message = await new Meetup().deleteMeetup(id);
      // set the status code and content-type
      res.writeHead(200, { "Content-Type": "application/json" });
      // send the message
      res.end(JSON.stringify({ message }));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(404, { "Content-Type": "application/json" });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // No route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
