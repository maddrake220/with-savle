import client from "libs/prisma";

async function handler(request, response) {
  if (request.method === "PUT") {
    const {
      params: { id, like },
    } = request.body;
    const results = await client.goal.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        likes: {
          increment: like ? 1 : -1,
        },
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
