import mongoose from 'mongoose'

const Schema = mongoose.Schema

const asanaCourseSchema = new Schema({
  seqNum: {
    type: Number
  },
  group: {
    type: String
  },
  poses: [{
    type: Schema.Types.ObjectId, 
    ref: 'Pose'
  }]
},{
  timestamps: true,
})

const AsanaCourse = mongoose.model('AsanaCourse', asanaCourseSchema)

export { AsanaCourse }