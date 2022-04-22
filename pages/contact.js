import { Header } from '../src/layouts/header/header.tsx';
import constants from '../src/helpers/constants.json';
import { ContactScreen } from '../src/screens/contact/contact';

export default function Contact() {
  return (
    <div className='container'>
      <Header title={constants.fullName} />
      <ContactScreen />
    </div>
  );
}
