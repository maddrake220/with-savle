import client from "libs/prisma";

async function handler(request, response) {
  if (request.method === "GET") {
    const {
      query: { age },
    } = request;
    const results = await client.category.findMany({
      where: {
        age: Number.parseInt(age),
      },
    });
    if (results) {
      response.json({
        success: true,
        results,
      });
    } else {
      response.json({
        success: false,
      });
    }
  }
}

export default handler;
