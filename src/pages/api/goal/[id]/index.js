import client from "libs/prisma";

async function handler(request, res) {
  if (request.method === "GET") {
    const {
      query: { id },
    } = request;
    const results = await client.goal.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        comments: true,
      },
    });
    if (results) {
      res.json({
        success: true,
        results,
      });
    } else {
      res.json({
        success: false,
      });
    }
  }
}

export default handler;
