import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
	return (
		<div className='flex flex-col items-center justify-center bg-black min-h-screen w-full'>
			<img src='https://links.papareact.com/9xl' alt='' className='w-52 mb-5' />

			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						onClick={() => signIn(provider.id, { callbackUrl: '/' })}
						className='bg-[#18D860] text-white p-5 rounded-full'
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	)
}

export default Login

export async function getServerSideProps() {
	const providers = await getProviders()
	return {
		props: { providers },
	}
}
