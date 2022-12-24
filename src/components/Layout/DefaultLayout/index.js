import Header from '../components/Header';
import Sidebar from './Sidebar';
import NowPlayingBar from '../components/NowPlayingBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <NowPlayingBar />
        </div>
    );
}

export default DefaultLayout;
