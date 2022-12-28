import Header from '../components/Header';
import Sidebar from './Sidebar';
import NowPlayingBar from '../components/NowPlayingBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Discovery from '~/pages/Discovery';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('zm-layout')}>
            <Header />
            <Sidebar />
            <Discovery />
            {/* <NowPlayingBar /> */}
        </div>
    );
}

export default DefaultLayout;
