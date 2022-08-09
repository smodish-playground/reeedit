import { formatDistanceToNow } from 'date-fns'

const RelativeDate = ({ timestamp }) => {
  let timeBetween = ''

  if (timestamp) {
    const timePeriod = formatDistanceToNow(timestamp)
    timeBetween = `${timePeriod} ago`
  }

  return <>{timeBetween}</>
}

export default RelativeDate
