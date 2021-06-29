import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';


export default function FancyTimeline() {
  
return (
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Deigo, Ca</h4>
    <p>
      Full stack development with a focus on frontend.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020-2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Logistics and Maitenance</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
    <p>
      Maintained a clean and effecient warehouse. Improved workflow. Misc maitenance 
      on building, machines, equipment. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2015 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Warehouse Optimization</h3>
    <h4 className="vertical-timeline-element-subtitle">El Cajon, CA</h4>
    <p>
      Helped create methods that improved output, reduced mistakes, as well as engineering 
      products to save space. Custom CNC work as well as electronics assembly, diagnostics, 
      and repairs. Field diagnostic and repairs of hot tubs and spas.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016 - 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Grossmont College</h4>
    <p>
      3 years of night classes after work. Associates in Natural and Computer science, and Mathematics. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2012 - 2013"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Customer Service</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
    <p>
      Process data from customers or sales reps for delivery. Inventory count and data entry. 
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
)
}