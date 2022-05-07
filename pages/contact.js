import { Header } from '@layouts/header/header.tsx';
import { constants } from '@utils/constants';
import { ContactScreen } from '@screens/contact';
import { trans } from '@utils/trans';

export default function Contact() {
  return (
    <div className='container'>
      <Header title={`Contact | ${trans(constants.seo.title)}`} />
      <ContactScreen />
    </div>
  );
}
