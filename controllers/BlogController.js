// import { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog } from "../services/BlogService";
import * as Blog from "../models/Blog.js";
 
export async function getAllBlogs(req, res) {
  try {
    const blogs = await Blog.find();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
 
export async function createBlog(req, res) {
  try {
    const blog = await Blog.create(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
 
export async function getBlogById(req, res) {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
 
export async function updateBlog(req, res) {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
 
export async function deleteBlog(req, res) {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}