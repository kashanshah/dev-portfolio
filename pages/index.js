import { Header } from '../src/layouts/header/header.tsx';
import { HomeScreen } from '../src/screens/home/home.tsx';

export default function Home() {
  return (
    <div className='container'>
      <Header title='Syed Kashan ALi Shah' />
      <HomeScreen />
    </div>
  );
}
