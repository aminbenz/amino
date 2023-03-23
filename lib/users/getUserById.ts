export default async function getUserById(user_id: string) {
  const URL = `https://jsonplaceholder.typicode.com/users/${user_id}`;
  const res = await fetch(URL);

  if (!res.ok) throw new Error("Failed to fetch user data");
  return res.json();
}
