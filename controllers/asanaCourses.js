import { AsanaCourse } from "../models/asanaCourse.js"
import { Profile } from "../models/profile.js"

async function index(req,res) {
  try {
    const asanaCourses = await AsanaCourse.find({})
      .sort({ seqNum: 'asc' })
    res.status(200).json(asanaCourses)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const asanaCourse = await AsanaCourse.findById(req.params.asanaCourseId)
    .populate(['poses'])
    res.status(200).json(asanaCourse)

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

async function update(req,res) {
  console.log("working?")
  try {
    const asanaCourse = await AsanaCourse.findByIdAndUpdate(
      req.params.asanaCourseId,
      req.body,
      { new: true }
    ).populate('poses')
    res.status(200).json(asanaCourse)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function deleteCourse(req,res) {
  try {
    // Delete course from profiles
    const profiles = await Profile.find({})
    .populate('courses')
    profiles.forEach(async function(profile) {
      await profile.courses.deleteOne({ _id: req.params.asanaCourseId})
    })
    await profiles.save()
    const asanaCourse = await AsanaCourse.findByIdAndDelete(req.params.asanaCourseId)
    console.log("Profiles: ", profiles);
    res.status(200).json(asanaCourse)
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
  deleteCourse as delete,
}