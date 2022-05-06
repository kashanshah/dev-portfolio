import { Header } from '../src/layouts/header/header.tsx';
import { constants } from '../src/utils/constants';
import { ContactScreen } from '../src/screens/contact';

export default function Contact() {
  return (
    <div className='container'>
      <Header title={`Contact | ${constants.seo.title}`} />
      <ContactScreen />
    </div>
  );
}
