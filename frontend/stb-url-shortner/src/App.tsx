
import './App.css';
import Header from './component/Header/Header';
import URLShortenerForm from './component/Forms/URLShortenerForm';

const App = () => {

  return (
    <div className="app">
      <Header />
      <URLShortenerForm />
    </div>
  );

}

export default App;
