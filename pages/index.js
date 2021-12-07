import Head from 'next/head'

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Head>
				<title>Spotify 2.0</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>This is a DOPE Spotify 2.0 build</h1>
		</div>
	)
}
