import mongoose from 'mongoose'

const Schema = mongoose.Schema

const courseResultsSchema = new Schema({
  practitioner: {
    type: Schema.Types.ObjectId,
    ref: 'Profile' 
  },
  course: {
    type: Schema.Types.ObjectId, 
    ref: 'AsanaCourse'
  },
  completed: {
    type: Boolean
  }
},{
  timestamps: true,
})

const CourseResults = mongoose.model('CourseResults', courseResultsSchema)

export { CourseResults }