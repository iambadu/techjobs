import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./components/Header'));

export default function Home() {
  return (
    <>
      <Header/>
    </>
  )
}
