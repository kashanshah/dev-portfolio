import { Header } from '@layouts/header/header.tsx';
import { HomeScreen } from '@screens/home/';
import { constants } from '../src/utils/constants';
import { trans } from '../src/utils/trans';

export default function Home() {
  return (
    <div className='container'>
      <Header title={trans(constants?.seo?.title)} />
      <HomeScreen />
    </div>
  );
}
