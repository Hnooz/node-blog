import express, { json } from "express";
import { connect } from "mongoose";
import blogRoutes  from "./routes/BlogRoutes.js";

const app = express();
 


//configure mongoose
connect(
    process.env.MONGODB_URI || "mongodb+srv://hnooz:ISofZTtQEcsSMuhX@blog.rvpygzs.mongodb.net/test",
    {
        dbName: "blog",
        useNewUrlParser: true,
        useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MongoDB");
    }
}
);
//middleware
app.use("/api/blogs", blogRoutes);
app.use(json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 
export default app;