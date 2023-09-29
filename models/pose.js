import mongoose from 'mongoose'

const Schema = mongoose.Schema

const poseSchema = new Schema({
  name: {
    type: String 
  },
  seqNum : {
    type: Number
  },
  description: {
    type: String
  },
  duration: {
    type: String
  },
  photo: [{
    type: String
  }]
},{
  timestamps: true,
})

const Pose = mongoose.model('Pose', poseSchema)

export { Pose }