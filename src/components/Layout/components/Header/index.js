import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { ThemeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('center-actions')}>
                <span className={cx('back-btn', 'left-btn')}>
                    <i className={cx('icon', 'back-icon')} />
                </span>
                <span className={cx('forward-btn', 'left-btn')}>
                    <i className={cx('icon', 'forward-icon')} />
                </span>

                <form className={cx('search')}>
                    <div className={cx('search-container')}>
                        <span>
                            <i className={cx('icon', 'search-btn')} />
                        </span>

                        <div className={cx('input-wrapper')}>
                            <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
                        </div>
                    </div>
                </form>
            </div>

            <div className={cx('right-actions')}>
                <div className={cx('action-btn')}>
                    <ThemeIcon />
                </div>
                <div className={cx('action-btn')}>
                    <i className={cx('icon', 'icon-vip')} />
                </div>
                <div className={cx('action-btn')}>
                    <i className={cx('icon', 'icon-upload')} />
                </div>
                <div className={cx('action-btn')}>
                    <i className={cx('icon', 'icon-setting')} />
                </div>
                <div className={cx('profile-btn')}>
                    <img src={require('~/assets/images/profile.jpg')} alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Header;
