import { CourseResults } from "../models/courseResults.js"
import { AsanaCourse } from "../models/asanaCourse.js"
import { Profile } from "../models/profile.js"

async function index(req,res) {
  try {
    const courseResults = await CourseResults.find({})
    res.status(200).json(courseResults)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const courseResult = await CourseResults.findById(req.params.courseResultId)
    .populate(['practitioner', 'course'])
    res.status(200).json(courseResult)

  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req,res) {
  try {
    const courseResult = await CourseResults.create(req.body)
    res.status(201).json(courseResult)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function update(req,res) {
  try {
    const courseResult = await CourseResults.findByIdAndUpdate(
      req.params.courseResultId,
      req.body,
      { new: true }
    ).populate(['practitioner', 'course'])
    res.status(200).json(courseResult)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function deleteCourseResult(req,res) {
  try {
    const courseResult = await CourseResults.findByIdAndDelete(req.params.courseResultId)
    res.status(200).json(courseResult)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteCourseResult as delete,
}