import { Box } from '@chakra-ui/layout';
import './App.css';
import Headers from './components/Header/Headers';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Box>
      <Headers/>
      <About/>
      <Footer/>
    </Box>
  );
}

export default App;
