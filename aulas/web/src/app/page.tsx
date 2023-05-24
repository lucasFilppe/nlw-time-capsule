import {User} from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/*left */}
      <div className="relative flex flex-col overflow-hidden 
        items-start justify-between px-28 py-16 border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover">
        {/*Blur */}
        <div className="absolute right-0 top-1/2 h-[288px]  w-[526px] bg-purple-700 
        opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full " />
        {/*Stripes*/}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes pr-2"/>

          {/*sign in*/}
        <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="flex items-center gap-3 text-left hover:text-gray-50 transaction-colors"
        >
          <div className='flex h-10 items-center justify-center rounded-full bg-gray-400'>
            <User className="h-5 w-5 text-gray-500"/>
          </div>
          <p className='max-w-[140px]text-sm leading-snug'>
            <span className='underline'>Crie sua conta</span> e salve suas memórias
          </p>
        </a>

        {/*hero*/}
        <div className='space-y-5'>
          <Image src={nlwLogo} alt='logo spacetime'/>

          <div className='max-w-[420px] space-y-1'>
            <h1 className=' text-4xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
            <p className=' text-lg leading-relaxed'>
              Colecione moomentos marcantes da sua jornada e compartilhe(se quiser) com o mundo!
            </p>
          </div>

          <a href="" className='inline-block rounded-full 
            bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'>
              CADATRAR LEMBRAÇA
          </a>
        </div>

          {/*copyright*/}
          <div className='text-sm leading-relaxed text-gray-200'>
            Feito com amor no NLW da{' '}
            <a href="http://rocketseat.com.br>" 
              className='underline hover:text-gray-100'
              target='_blank'
              rel='noreferrer'
            >
              Rocketseat
            </a>
          </div>

      </div>

      {/*right */}
      <div className="flex flex-col p-16 bg-[url(../assets/stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxad">Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href=""className="underline hover:text-gray-50">criar agora!</a>
          </p>
        </div>
      </div>
    </main>
  )
}
