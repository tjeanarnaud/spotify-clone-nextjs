import { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { debounce } from 'lodash'

import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSongInfo from '../hooks/useSongInfo'
import useSpotify from '../hooks/useSpotify'

import HeartOutlineIcon from '../assets/icons/heart-outline-icon.svg'
import ShuffleArrowsOutlineIcon from '../assets/icons/shuffle-arrows-outline-icon.svg'
import PreviousArrowOutlineIcon from '../assets/icons/previous-arrow-solid-icon.svg'
import PlaySolidIcon from '../assets/icons/play-solid-icon.svg'
import PauseSolidIcon from '../assets/icons/pause-solid-icon.svg'
import NextArrowOutlineIcon from '../assets/icons/next-arrow-solid-icon.svg'
import RepeatOutlineIcon from '../assets/icons/repeat-outline-icon.svg'
import SoundOffOutlineIcon from '../assets/icons/sound-off-outline-icon.svg'
import SoundOnOutlineIcon from '../assets/icons/sound-on-outline-icon.svg'
import SoundUpSolidIcon from '../assets/icons/sound-up-solid-icon.svg'

const Player = () => {
	const spotifyApi = useSpotify()
	const { data: session, status } = useSession()
	const [currentIdTrack, setCurrentIdTrack] =
		useRecoilState(currentTrackIdState)
	const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
	const [volume, setVolume] = useState(50)

	const songInfo = useSongInfo()

	const fetchCurrentSong = () => {
		if (!songInfo) {
			spotifyApi.getMyCurrentPlayingTrack().then((data) => {
				console.log('Now playing: ', data.body?.item)
				setCurrentIdTrack(data.body?.item?.id)

				spotifyApi.getMyCurrentPlaybackState().then((data) => {
					setIsPlaying(data.body?.is_playing)
				})
			})
		}
	}

	const handlePlayPause = () => {
		spotifyApi.getMyCurrentPlaybackState().then(
			(data) => {
				console.log(data)
				if (data.body?.is_playing) {
					spotifyApi.pause()
					setIsPlaying(false)
				} else {
					spotifyApi.play()
					setIsPlaying(true)
				}
			},
			function (error) {
				console.log('Something went wrong!', error)
			}
		)
	}

	useEffect(() => {
		if (spotifyApi.getAccessToken() && !currentIdTrack) {
			fetchCurrentSong()
			setVolume(50)
		}
	}, [currentTrackIdState, spotifyApi, session])

	useEffect(() => {
		if (volume > 0 && volume < 100) {
			debouncedAdjustVolume(volume)
		}
	}, [volume])

	const debouncedAdjustVolume = useCallback(
		debounce((volume) => {
			spotifyApi.setVolume(volume)
		}, 500),
		[]
	)

	return (
		<div className='h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
			{/* Left */}
			<div className='flex items-center space-x-4'>
				<img
					className='hidden md:inline h-10 w-10'
					src={songInfo?.album.images[0].url}
					alt=''
				/>
				<div>
					<h3>{songInfo?.name}</h3>
					<p>{songInfo?.artists?.[0].name}</p>
				</div>
			</div>

			<div className='flex items-center justify-evenly'>
				<ShuffleArrowsOutlineIcon className='player-icon' />
				<PreviousArrowOutlineIcon
					className='player-icon'
					// onClick={() => spotifyApi.skipToPrevious()}
				/>
				{isPlaying ? (
					<PauseSolidIcon
						className='player-icon w-12 h-12'
						onClick={handlePlayPause}
					/>
				) : (
					<PlaySolidIcon
						className='player-icon w-14 h-14'
						onClick={handlePlayPause}
					/>
				)}
				<NextArrowOutlineIcon
					className='player-icon'
					// onClick={() => spotifyApi.skipToNext()}
				/>
				<RepeatOutlineIcon
					className='player-icon'
					// onClick={() => spotifyApi.skipToPrevious()}
				/>
			</div>

			<div className='flex items-center md:space-x-3 justify-end pr-5'>
				<SoundOnOutlineIcon
					className='player-icon'
					onClick={() => volume > 0 && setVolume(volume - 10)}
				/>
				<input
					className='w-14 md:w-28'
					type='range'
					value={volume}
					onChange={(e) => setVolume(Number(e.target.value))}
					min={0}
					max={100}
				/>
				<SoundUpSolidIcon
					className='player-icon'
					onClick={() => volume < 100 && setVolume(volume + 10)}
				/>
			</div>
		</div>
	)
}

export default Player
