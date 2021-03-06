import { getSession } from 'next-auth/react'
import Head from 'next/head'
import MainContent from '../components/main-content'
import Player from '../components/player'
import Sidebar from '../components/sidebar'

import Style from '../styles/home.module.css'

export default function Home() {
	return (
		<>
			<div className={Style.wrapper}>
				<div className={Style.container}>
					<Sidebar />
					<MainContent />
				</div>
			</div>

			<div className='player'>
				<Player />
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	const session = await getSession(context)
	return { props: { session } }
}
