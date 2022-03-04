import client from "libs/prisma";

async function handler(req, res) {
  if (req.method === "POST") {
    const { params } = req.body;
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

  if (req.method === "GET") {
    const results = await client.vote.findMany({
      include: {
        voteSelect: true,
        voteComments: true,
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
  if (req.method === "PUT") {
    const {
      params: { id },
    } = req.body;
    const results = await client.voteSelect.update({
      where: {
        id: parseInt(id),
      },
      data: {
        count: {
          increment: 1,
        },
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
