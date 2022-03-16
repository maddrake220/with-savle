import client from "libs/prisma";

async function handler(request, response) {
  if (request.method === "POST") {
    const { params } = request.body;
    const results = await client.vote.create({
      data: {
        title: params.title,
        text: params.text,
        voteSelect: {
          create: params.items,
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

  if (request.method === "GET") {
    const results = await client.vote.findMany({
      orderBy: [
        {
          likes: "desc",
        },
      ],
      include: {
        voteSelect: {
          orderBy: {
            id: "desc",
          },
        },
        voteComments: true,
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
  if (request.method === "PUT") {
    const {
      params: { id },
    } = request.body;
    const results = await client.voteSelect.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        count: {
          increment: 1,
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
