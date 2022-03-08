import client from "libs/prisma";

async function handler(req, res) {
  if (req.method === "GET") {
    const {
      query: { age },
    } = req;
    const results = await client.category.findMany({
      where: {
        age: parseInt(age),
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
