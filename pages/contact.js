import { Header } from '@layouts/header/header.tsx';
import { constants } from '@helpers/constants';
import { ContactScreen } from '@screens/contact/contact';

export default function Contact() {
  return (
    <div className='container'>
      <Header title={`Contact | ${constants.title}`} />
      <ContactScreen />
    </div>
  );
}
