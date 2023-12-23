export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export default async function getLoad() {
  await delay(140);
  return;
}
