import Head from 'next/head'
import Sidebar from '../components/sidebar'

import Style from '../styles/home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Spotify 2.0</title>
			</Head>

			<div className={Style.wrapper}>
				<div className={Style.container}>
					{/* Sidebar */}
					<Sidebar />
					{/* main */}
					<div className={Style.main}></div>
				</div>
			</div>

			<div className='player'>{/* Player */}</div>
		</>
	)
}
