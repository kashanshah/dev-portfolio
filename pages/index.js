import { Header } from '@layouts/header/header.tsx';
import { HomeScreen } from '@screens/home/home.tsx';
import { constants } from '@helpers/constants';

export default function Home() {
  return (
    <div className='container'>
      <Header title={constants.title} />
      <HomeScreen />
    </div>
  );
}
