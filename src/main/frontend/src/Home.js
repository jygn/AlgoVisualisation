import AppNav from './components/AppNav';
import AlgoList from './AlgosList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    return (
        <>
            <AppNav/>
            <AlgoList/>
        </> 
    );
}
 
export default Home;