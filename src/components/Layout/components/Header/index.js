import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ThemeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('center-actions')}>
                <div className={cx('nav-btn')}>
                    <span className={cx('back-btn')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <span className={cx('forward-btn')}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </div>

                <form className={cx('search')}>
                    <div className={cx('search-container')}>
                        <span>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>

                        <div className={cx('input-wrapper')}>
                            <input placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." />
                        </div>
                    </div>
                </form>
            </div>

            <div className={cx('right-actions')}>
                <div className={cx('action-btn')}>
                    <ThemeIcon />
                </div>
                <div className={cx('action-btn')}></div>
                <div className={cx('action-btn')}></div>
                <div className={cx('action-btn')}></div>
                <div className={cx('action-btn')}></div>
            </div>
        </div>
    );
}

export default Header;
