import spotifyWebApi from "spotify-web-api-node";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function Spotify() {
  const SpotifyApi = new spotifyWebApi();
  const session = await getServerSession(authOptions);

  if (!session?.token) {
    console.error("No token :getToken:lib/spotify");
  } else {
    SpotifyApi.setAccessToken(session.token.access_token);
  }
  return SpotifyApi;
}
