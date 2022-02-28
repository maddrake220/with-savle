import client from 'libs/prisma';

async function handler(req, res) {
  if (req.method === 'PUT') {
    const {
      params: { id, like },
    } = req.body;
    const results = await client.goal.update({
      where: {
        id: parseInt(id),
      },
      data: {
        likes: {
          increment: like ? 1 : -1,
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
