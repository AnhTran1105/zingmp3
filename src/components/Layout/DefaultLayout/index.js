import Header from '../components/Header';
import Sidebar from './Sidebar';
import NowPlayingBar from '../components/NowPlayingBar';
import MainPage from '../components/MainPage';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container" style={{ width: '100%', height: '100vh' }}>
                <Sidebar />
                <MainPage />
                <div className="content">{children}</div>
            </div>
            <NowPlayingBar />
        </div>
    );
}

export default DefaultLayout;
