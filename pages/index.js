import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/Header'));
const Reel = dynamic(() => import('./components/Reel'));

export default function Home() {
  return (
    <>
      <Header/>
      <Reel/>
    </>
  )
}
