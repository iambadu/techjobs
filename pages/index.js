import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/header'));
const Reel = dynamic(() => import('./components/reel'));

export default function Home() {
 
  return (
    <>
      <Reel/>
    </>
  )
}
