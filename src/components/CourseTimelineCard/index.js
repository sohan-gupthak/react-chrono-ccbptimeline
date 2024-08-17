import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {tagsList} = data
  return (
    <div className="card-con">
      <div className="title-duration-con">
        <h1 className="title">{data.courseTitle}</h1>
        <div className="cal-dur-con">
          <AiFillClockCircle />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-discription">{data.description}</p>
      <div className="tags-con">
        {tagsList.map(each => (
          <p className="tag" key={each.id}>
            {each.name}{' '}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
