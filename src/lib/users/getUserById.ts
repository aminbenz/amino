export default async function getUserById(user_id: string) {
  const user = await fetch(`/api/users/${user_id}`);
  return user;
}
