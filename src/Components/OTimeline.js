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
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="Feb-July 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, Ca</h4>
    <p>
      Full stack development. Helped in developing a server for users to share
      spells they develop for an interactive online game.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
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
    className="vertical-timeline-element--education"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
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
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
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
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2013 - 2015"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Delivered Sales</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, Ca</h4>
    <p>
      Client service, data entry, and inter-department relations. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2012 - 2013"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Tire and Lube Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
    <p>
      Oil Changes, tire repair and replacement, allignments, brakes, belts, and more. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2010-2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Lube Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">Poway, CA</h4>
    <p>
        Solid mix of customer service and getting hands dirty under a car. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2008-2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Warehouse Clerk</h3>
    <h4 className="vertical-timeline-element-subtitle">El Cajon, CA</h4>
    <p>
      Organization and strict timeline management. Cycle counts and accurate inventory.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2007-2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Water Damage Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
    <p>
      Demoliton, sub-frame drying, mold remediation, and sewage cleanup. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2006-2007"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Dealership Lube Tech</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
    <p>
      Introduction to the world of automotive repair. Oil changes and basic maintenance galore!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2005 - 2007"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Cuyamaca College</h4>
    <p>
      2 years of classes before or after work. Strict focus on automotive repair and technology.  
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2005 - 2006"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Sandwich Artist</h3>
    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
    <p>
      "Hi, welcome to [sandwiich place]!" Food prep, cleaning, register counts, and all of the customer service.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{background: 'rgba(0, 0, 0, 0)'}}
    date="2001 - 2005"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Student</h3>
    <h4 className="vertical-timeline-element-subtitle">High School</h4>
    <p>
        High school student by day, adventurous youth by night! 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
)
}