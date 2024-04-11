export async function load({ fetch, params }: any) {
  try {
    const response = await fetch(
      `/api/tests/${params.course}/${params.lesson}`
    );
    const data = await response.json();

    return data;
  } catch (e) {
    throw error(404, `No se pudo encontrar el test`);
  }
  // const posts: Post[] = await response.json();
}
