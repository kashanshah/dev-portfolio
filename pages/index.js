import { Header } from '@layouts/header/header.tsx';
import { HomeScreen } from '@screens/home/';
import { constants } from '../src/utils/constants';

export default function Home() {
  return (
    <div className='container'>
      <Header title={constants.seo.title} />
      <HomeScreen />
    </div>
  );
}
