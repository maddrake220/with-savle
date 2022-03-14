import client from "libs/prisma";

async function handler(request, response) {
  if (request.method === "GET") {
    const {
      query: { id },
    } = request;
    const results = await client.voteComment.findMany({
      where: {
        voteId: Number.parseInt(id),
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
