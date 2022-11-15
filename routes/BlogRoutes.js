import { Router } from "express";
import { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog } from "../controllers/BlogController.js";
 
const router = Router();
 
router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
 
export default router;