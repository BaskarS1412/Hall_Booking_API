import express from "express";
import hallRouter from "./Routers/hallbooking.router.js";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200)
    .send(`<div style="text-align: center; background-color:lightblue;  padding: 10px;"><h1>Welcome to the greate karigalan Hall Booking</h1></div>
    <div>
    <ul>
    <li>
    <h3><mark>Get:</mark> Use the endpoint to <mark>/hallapi/allroomdetails</mark> to get the All Room Details</h3>
    </li>

    <li>
    <h3><mark>Post:</mark> Change the endpoint to <mark>/hallapi/createroom</mark> to Create the New Room</h3>
    </li>

    <li>
    <h3><mark>Post:</mark> Change the endpoint to <mark>/hallapi/bookingroom</mark> to Book a New Room</h3>
    </li>

    <li>
    <h3><mark>Get:</mark> Change the endpoint to <mark>/hallapi/bookedroomdata</mark> to retrieve Booked Room Data</h3>
    </li>

    <li>
    <h3><mark>Get:</mark> Change the endpoint to <mark>/hallapi/customersbookeddata</mark> to retrieve Data of Booked Customers and Rooms</h3>
    </li>

    <li>
    <h3><mark>Get:</mark> Change the endpoint to <mark>/hallapi/customerbookingcount</mark> to retrieve Booking Counts and Room Data for Booked Customers</h3>
    </li>

    </ul> 
    </div>`);
});
app.use("/hallapi", hallRouter);

app.listen(PORT, () => {
  console.log(`App Listening in ${PORT}`);
});
