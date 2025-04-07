// profile.jsx
import Header from './components/Header.jsx'; // ← Header 是這裡進來的
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

export default function Profile() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
