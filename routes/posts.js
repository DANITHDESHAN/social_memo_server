import express from "express";
import { getPosts, getPostBySearch, createPost,updatePost,deletePost, likePost } from "../controllers/posts.js";
import auth from '../middleware/auth.js'

const router = express.Router();

router.get("/", getPosts);

router.get("/search", getPostBySearch);

router.post("/", auth, createPost)

router.delete("/:id", auth, deletePost);

router.patch('/:id', auth, updatePost);

router.patch("/:id/likePost", auth, likePost);

export default router;
