import client from "libs/prisma";

async function handler(req, res) {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;
    const results = await client.voteComment.findMany({
      where: {
        voteId: parseInt(id),
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
