import { error, json } from "@sveltejs/kit";
import fs from "fs/promises";
import path from "path";

async function getTest(course: string, lesson: string) {
  switch (course.toLowerCase()) {
    case "go":
      const filePath = path.resolve(
        "src/content/tests/go",
        `test-${lesson}.json`
      );

      const data = await fs.readFile(filePath, "utf-8");

      return JSON.parse(data);
  }
}

export async function GET({ params }: any) {
  // The `params.quizId` holds the dynamic part of the URL, e.g., "test-1" for "/quiz/test-1"
  const { course, lesson } = params;

  try {
    // Construct the file path to the quiz JSON file

    if (isNaN(Number(lesson))) {
      return json({ ok: false, error_message: "Invalid Quiz!" });
    }

    const tests = await getTest(course, lesson);
    return json({ ok: true, ...tests });
    // const filePath = path.resolve("src/content/tests/go", `test-1.json`);

    // // Read the file's content
    // const data = await fs.readFile(filePath, "utf-8");

    // // Return the file content as JSON
    // return json(JSON.parse(data));
  } catch (err) {
    // Handle errors, such as the file not existing
    console.error(err);
    return error(404, `Quiz not found`);
  }
}

// import { json } from "@sveltejs/kit";

// async function getQuestions(course: string, lesson: string) {
//   console.log(course, lesson, " return");

//   switch (course.toLowerCase()) {
//     case "go":
//       let a = import.meta.glob("/src/content/tests/go/test-1.json", {
//         eager: true,
//       });
//       console.log(a);

//       break;
//   }

//   return { ok: true };
// }

// export async function GET({ params }: any) {
//   console.log(params, "apaaaraams");
//   const courses = await getQuestions(params.course, params.lesson);
//   return json(courses);
// }
