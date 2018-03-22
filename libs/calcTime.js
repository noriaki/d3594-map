const calcTime = (distance, speed, stationing = false) => {
  const seconds = (distance / speed) * 60 * 60;
  return Math.floor(stationing ? seconds / 3 : seconds);
};
export default calcTime;
