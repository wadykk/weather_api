import express from "express";
import weatherRoute from "./routes/weatherRoute.js";
import seismicRoute from "./routes/seismicRoute.js"
import supercarRoute from "./routes/supercarRoute.js"
import brandRoute from "./routes/brandRoute.js"
import cors from "cors";


// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
app.use(cors());


// We define our first route
app.use("/api/weather", weatherRoute);

//We define our second route
app.use("/api/seismic", seismicRoute);

//We define our third route
app.use("/api/supercar", supercarRoute);

//We define our forth route
app.use("/api/brand", brandRoute);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
