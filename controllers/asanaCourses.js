import { AsanaCourse } from "../models/asanaCourse.js"
import { Profile } from "../models/profile.js"

async function index(req,res) {
  try {
  
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const article = await Article.findById(req.params.articleId)
    .populate(['comments.author'])
    res.status(200).json(article)

  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req,res) {
  try {
    const asanaCourse = await AsanaCourse.create(req.body)
    res.status(201).json(asanaCourse)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index,
  show,
  create
}