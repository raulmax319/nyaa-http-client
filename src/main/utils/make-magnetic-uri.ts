export function makeMagneticUri(hash: string): string {
  return `magnet:?xt=${hash}&${process.env.TRACKERS}`;
}
