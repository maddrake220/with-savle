import client from "libs/prisma";

async function handler(request, response) {
  if (request.method === "POST") {
    const { params } = request.body;
    const results = await client.voteComment.create({
      data: {
        text: params.text,
        voteId: Number.parseInt(params.id),
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
