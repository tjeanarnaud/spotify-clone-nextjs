import { signOut, useSession } from 'next-auth/react'

import HomeIcon from '../assets/icons/home-outline-icon.svg'
import SearchIcon from '../assets/icons/search-outline-icon.svg'
import LibraryIcon from '../assets/icons/library-outline-icon.svg'
import AddPlusOutlineIcon from '../assets/icons/add-plus-outline-icon.svg'
import HeartIcon from '../assets/icons/heart-outline-icon.svg'
import RssIcon from '../assets/icons/rss-outline-icon.svg'
import LogoutIcon from '../assets/icons/logout-outline-icon.svg'

import Aside from '../styles/sidebar.module.css'
import Menu from '../styles/menu.module.css'

const Sidebar = () => {
	const { data: session, status } = useSession()
	console.log(session)

	return (
		<div className={Aside.container}>
			<div className={Aside.menu}>
				<button className={Menu.item} onClick={() => signOut()}>
					<LogoutIcon className={Menu.icon} />
					<p>Logout</p>
				</button>
				<button className={Menu.item}>
					<HomeIcon className={Menu.icon} />
					<p>Home</p>
				</button>
				<button className={Menu.item}>
					<SearchIcon className={Menu.icon} />
					<p>Search</p>
				</button>
				<button className={Menu.item}>
					<LibraryIcon className={Menu.icon} />
					<p>Your Library</p>
				</button>

				<hr className='border-t-[0.1px] border-gray-900' />

				<button className={Menu.item}>
					<AddPlusOutlineIcon className={Menu.icon} />
					<p>Create Playlist</p>
				</button>
				<button className={Menu.item}>
					<HeartIcon className={Menu.icon} />
					<p>Liked Songs</p>
				</button>
				<button className={Menu.item}>
					<RssIcon className={Menu.icon} />
					<p>Your Episodes</p>
				</button>

				<hr className='border-t-[0.1px] border-gray-900' />

				{/* Playlist... */}
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
				<p className={Menu.playlist_item}>Playlist name...</p>
			</div>
		</div>
	)
}

export default Sidebar