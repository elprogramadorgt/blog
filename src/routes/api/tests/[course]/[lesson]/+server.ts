import { error, json } from "@sveltejs/kit";

async function getTest(course: string, lesson: string) {
  switch (course.toLowerCase()) {
    case "go":
      switch (lesson) {
        case "1":
          const filePath = "/src/content/tests/go/test-1.json";

          const file = import.meta.glob("/src/content/tests/go/test-1.json", {
            eager: true,
          });

          return file[filePath];
      }

      return { ok: false };
  }
}

export async function GET({ params }: any) {
  const { course, lesson } = params;

  try {
    if (isNaN(Number(lesson))) {
      return json({ ok: false, error_message: "Invalid Quiz!" });
    }

    const tests: any = await getTest(course, lesson);
    if (tests.ok == false) return json({ ok: false });
    return json({ ok: true, ...tests });
  } catch (err) {
    console.error(err);
    return error(404, `Quiz not found`);
  }
}
