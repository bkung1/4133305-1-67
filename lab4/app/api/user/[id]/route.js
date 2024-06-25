import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const userID = Number(params.id);

  const user = await prisma.user.findUnique({
    where: {
      id: userID,
    },
  });

  return Response.json(user);
}

export async function DELETE(req, { params }) {
  try {
    const userID = Number(params.id);

    const delUser = await prisma.user.delete({
      where: { id: userID },
    });
    return Response.json(delUser, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const userID = Number(params.id);
    const { email, name } = await req.json();
    const updateUser = await prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        email,
        name,
      },
    });
    return Response.json(updateUser, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
