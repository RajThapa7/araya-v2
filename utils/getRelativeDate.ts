const getRelativeDate = (date: Date) => {
  const currDateMs = new Date().getTime();
  const passedDateMs = date.getTime();

  const timeDifference = currDateMs - passedDateMs;

  const secInMs = 1000;
  const minInMs = 60 * secInMs;
  const hourInMs = 60 * minInMs;
  const dayInMs = 24 * hourInMs;
  const weekInMs = 7 * dayInMs;
  const monthInMs = 30 * dayInMs;
  const yearInMs = 365 * dayInMs;

  if (minInMs - timeDifference > 0) {
    const second = Math.ceil(timeDifference / secInMs);
    return `${second} sec ago`;
  }
  if (hourInMs - timeDifference > 0) {
    const minute = Math.ceil(timeDifference / minInMs);
    return `${minute} min ago`;
  }
  if (dayInMs - timeDifference > 0) {
    const hour = Math.ceil(timeDifference / hourInMs);
    return `${hour} hr ago`;
  }
  if (weekInMs - timeDifference > 0) {
    const day = Math.ceil(timeDifference / dayInMs);
    return `${day} day ago`;
  }
  if (monthInMs - timeDifference > 0) {
    const week = Math.ceil(timeDifference / weekInMs);
    return `${week} week ago`;
  }
  if (yearInMs - timeDifference > 0) {
    const month = Math.ceil(timeDifference / monthInMs);
    return `${month} month ago`;
  }
  return `${Math.floor(timeDifference / yearInMs)} year ago`;
};

export default getRelativeDate;
