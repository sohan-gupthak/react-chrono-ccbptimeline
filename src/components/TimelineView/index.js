import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getEachItem = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard data={each} />
    }
    return <CourseTimelineCard data={each} />
  }

  return (
    <div className="time-line-con">
      <div className="chrono-container">
        <div className="HeaderContainer">
          <h1 className="Heading">
            My journey of <br />
            <span className="CCBPHeading">CCBP 4.0</span>{' '}
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => getEachItem(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
