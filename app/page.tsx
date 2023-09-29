'use client'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss';

const localizer = momentLocalizer(moment)

export default function Home() {
  return <div>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
}
