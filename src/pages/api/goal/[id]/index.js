import client from "libs/prisma";

async function handler(req, res) {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;
    const results = await client.goal.findUnique({
      where: {
        id: parseInt(id),
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
