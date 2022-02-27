import client from 'libs/prisma';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { params } = req.body;
    const results = await client.goal.create({
      data: params,
    });
    params.categories.map(async (keyword) => {
      await client.category.upsert({
        where: {
          age_keyword: {
            age: parseInt(params.age),
            keyword,
          },
        },
        update: {
          count: {
            increment: 1,
          },
        },
        create: {
          age: parseInt(params.age),
          keyword,
        },
      });
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

  if (req.method === 'GET') {
    const results = await client.goal.findMany({
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
