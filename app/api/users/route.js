import { getAllUsers, createUser, getUserById } from "@/lib/prisma/users";

export async function GET(request) {
  try {
    const users = await getAllUsers();
    return Response.json({ msg: "Get Users", result: users });
  } catch (error) {
    return Response.json({ msg: error.message }, { status: 500 });
  }
}

export async function POST(request, response) {
  try {
    const data = await request.json();
    const { first_name, last_name, email, password } = data;

    if (!first_name || !last_name || !email || !password) {
      return Response.json(
        {
          msg: "Please enter required fields",
        },
        {
          status: 401,
        }
      );
    }

    data.name = `${first_name} ${last_name}`;
    data.username = data.name.trim().toLowerCase().replace(" ", "");

    const user = await createUser(data);
    return Response.json(
      {
        msg: `User created successfully`,
        result: user,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get("id");
  const data = await request.json();
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: data,
    });

    return Response.json({
      msg: "User updated",
      result: updateUser,
    });
  } catch (error) {
    console.log(error);
  }
}
