import { Pose } from "../models/pose.js"
import { Profile } from "../models/profile.js"

async function index(req,res) {
  try {
    const poses = await Pose.find({})
      .sort({ seqNum: 'asc' })
    res.status(200).json(poses)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const pose = await Pose.findById(req.params.poseId)
    res.status(200).json(pose)

  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req,res) {
  try {
    const pose = await Pose.create(req.body)
    res.status(201).json(pose)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function update(req,res) {
  try {
    const pose = await Pose.findByIdAndUpdate(
      req.params.poseId,
      req.body,
      { new: true }
    )
    res.status(200).json(pose)
  } catch (err) {
    res.status(500).json(err)
  }
}

async function deletePose(req,res) {
  try {
    const pose = Pose.findByIdAndDelete(req.params.poseId)
    // need to delete courses from all courses as well
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
  deletePose as delete,
}