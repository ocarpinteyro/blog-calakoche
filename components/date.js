import { format } from 'date-fns'

const getTimeTag = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(new Date(dateString), 'LLLL	d, yyyy')}
  </time>
)

export default getTimeTag;
