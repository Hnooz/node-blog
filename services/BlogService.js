import { find, create, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/Blog";
 
export async function getAllBlogs() {
  return await find();
}
 
export async function createBlog(blog) {
  return await create(blog);
}

export async function getBlogById(id) {
  return await findById(id);
}
 
export async function updateBlog(id, blog) {
  return await findByIdAndUpdate(id, blog);
}
 
export async function deleteBlog(id) {
  return await findByIdAndDelete(id);
}