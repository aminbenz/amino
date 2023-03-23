export async function GET(req: Request, res: Response) {
  return Response.json({ msg: "Salem, from server 😊", status: 200 });
}
