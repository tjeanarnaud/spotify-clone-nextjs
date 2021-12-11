import Head from 'next/head'
import MainContent from '../components/main-content'
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
					<MainContent />
				</div>
			</div>

			<div className='player'>{/* Player */}</div>
		</>
	)
}
