const calcDistance = (p1, p2) => (
  Math.sqrt(((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2))
);
export default calcDistance;

export const displayDistance = distance => Math.ceil(distance * 10) / 10;
