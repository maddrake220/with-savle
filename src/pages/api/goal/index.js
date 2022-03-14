import client from "libs/prisma";

async function handler(request, response) {
  if (request.method === "POST") {
    const { params } = request.body;
    const results = await client.goal.create({
      data: params,
    });
    params.categories.map(async (keyword) => {
      await client.category.upsert({
        where: {
          age_keyword: {
            age: Number.parseInt(params.age),
            keyword,
          },
        },
        update: {
          count: {
            increment: 1,
          },
        },
        create: {
          age: Number.parseInt(params.age),
          keyword,
        },
      });
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
    const results = await client.goal.findMany({
      include: {
        comments: true,
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
