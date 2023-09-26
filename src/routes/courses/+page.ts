export async function load({ fetch }: any) {
  const response = await fetch("api/courses");
  const courses: any[] = await response.json();
  return { courses };
}
