import { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { signIn, useSession } from 'next-auth/react'

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

function useSpotify() {
	const { data: session, status } = useSession()

	useEffect(() => {
		if (session) {
			// If refresh access token attempt fails, direct user to login...
			if (session.error === 'RefreshTokenError') {
				signIn()
			}

			spotifyApi.setAccessToken(session.user.accessToken)
		}
	}, [session])

	return spotifyApi
}

export default useSpotify
