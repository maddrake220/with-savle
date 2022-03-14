import client from "libs/prisma";

async function handler(request, respond) {
  if (request.method === "GET") {
    const {
      query: { id },
    } = request;
    const results = await client.vote.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        voteSelect: {
          orderBy: {
            id: "asc",
          },
        },
        voteComments: true,
      },
    });
    if (results) {
      respond.json({
        success: true,
        results,
      });
    } else {
      respond.json({
        success: false,
      });
    }
  }
}

export default handler;
