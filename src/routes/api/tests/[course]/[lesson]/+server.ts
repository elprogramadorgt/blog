import { json } from "@sveltejs/kit";

async function getQuestions(course: string, lesson: string) {
  console.log(course, lesson, " return");

  switch (course.toLowerCase()) {
    case "go":
      let a = import.meta.glob("/src/content/tests/go/test-1.json", {
        eager: true,
      });
      console.log(a);

      break;
  }

  return { ok: true };
}

export async function GET({ params }: any) {
  console.log(params, "apaaaraams");
  const courses = await getQuestions(params.course, params.lesson);
  return json(courses);
}
