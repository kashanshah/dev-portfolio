import { Header } from '../src/layouts/header/header.tsx';
import { HomeScreen } from '../src/screens/home/home.tsx';
import constants from '../src/helpers/constants.json';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <Header title={constants.fullName} />
      <HomeScreen />
    </div>
  );
}
