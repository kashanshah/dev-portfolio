import { Header } from '../src/layouts/header/header.tsx';
import { HomeScreen } from '../src/screens/home/home.tsx';
import constants from '@helpers/constants.json';

export default function Home() {
  return (
    <div className='container'>
      <Header title={constants.fullName} />
      <HomeScreen />
    </div>
  );
}
