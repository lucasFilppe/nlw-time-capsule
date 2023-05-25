
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'

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
        <SignIn/>

        {/*hero*/}
        <Hero/>

          {/*copyright*/}
          <Copyright/>
      </div>

      {/*right */}
      <div className="flex flex-col p-16 bg-[url(../assets/stars.svg)] bg-cover">
        <EmptyMemories/>
      </div>
    </main>
  )
}
