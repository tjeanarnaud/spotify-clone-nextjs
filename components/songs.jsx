import React from 'react'
import { useRecoilValue } from 'recoil'

import { playlistState } from '../atoms/playlistAtom'
import Song from './song'

const Songs = () => {
	const playlist = useRecoilValue(playlistState)

	return (
		<div className='text-white px-8 pb-28 space-y-1'>
			{playlist?.tracks.items.map((track, i) => (
				<Song key={track.track.id} track={track} order={i} />
			))}
		</div>
	)
}

export default Songs
