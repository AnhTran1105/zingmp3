import classNames from 'classnames/bind';
import { PlaylistIcon } from '~/components/Icons';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <div className={cx('logo')}></div>
            </div>
            <Menu>
                <MenuItem title="Cá nhân" icon={<PlaylistIcon />}></MenuItem>
            </Menu>
        </div>
    );
}

export default Sidebar;
