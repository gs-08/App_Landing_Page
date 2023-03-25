import About from './components/About';
import Feature from './components/Feature';
import Presentation from './components/Presentation';
import Header from './components/Header';
import aboutImage from './images/about.png';
import downloadImage from './images/download.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutImage} title='Comes With All You Need For Daily Life' btn='Get The App'/>
      <Presentation/>
      <About image={downloadImage} title='Download and get the app Now!' btn='Download'/>
      <Contact/>
    </div>
  );
}

export default App;
