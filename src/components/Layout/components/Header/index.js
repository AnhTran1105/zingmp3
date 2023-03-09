/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { ThemeIcon } from '~/components/Icons';
import Menu from '../Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    const [posY, setPosY] = useState(0);

    const menu = useRef();

    const handleShowMenu = () => {
        menu.current.style.visibility = 'visible';
    };

    useEffect(() => {
        const handleScroll = (e) => setPosY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className={cx('header', posY > 0 ? 'is-sticky' : '')}>
            <div className={cx('level')}>
                <div className={cx('level-left')}>
                    <button className={cx('btn', 'disabled', 'back-btn')}>
                        <i className={cx('icon', 'back-icon')}></i>
                    </button>
                    <button className={cx('btn', 'disabled', 'next-btn')}>
                        <i className={cx('icon', 'next-icon')}></i>
                    </button>
                    <form className={cx('search')}>
                        <div className={cx('search-container')}>
                            <button className={cx('btn', 'search-btn')}>
                                <i className={cx('icon', 'search-icon')}></i>
                            </button>
                            <div className={cx('input-wrapper')}>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={cx('level-right')}>
                    <div className={cx('download-desktop-app')}>
                        <a className={cx('download-btn')} tabIndex="0">
                            <i className={cx('icon', 'download-icon')}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M6 16.8333H14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </i>
                            <span>Tải bản macOS</span>
                        </a>
                        <div className={cx('tooltip-download-btn')}>
                            Zing MP3 đã có ứng dụng cho máy tính, tải ngay cho trải nghiệm tuyệt vời nhất.
                        </div>
                    </div>
                    <div className={cx('setting-item')}>
                        <button className={cx('btn', 'theme-btn')} tabIndex="0">
                            <i className={cx('icon', 'theme-icon')}>
                                <ThemeIcon />
                            </i>
                        </button>
                    </div>
                    <a className={cx('setting-item')} target="_blank">
                        <button className={cx('btn', 'vip-btn')} tabIndex="0">
                            <i className={cx('icon', 'vip-icon')}></i>
                        </button>
                    </a>
                    <div className={cx('setting-item')}>
                        <button className={cx('btn', 'gear-icon')} tabIndex="0">
                            <i className={cx('icon', 'gear-icon')}></i>
                        </button>
                    </div>
                    <div onClick={handleShowMenu} className={cx('avatar')}>
                        <figure className={cx('image')}>
                            <img alt="" src={require('~/assets/images/profile.jpg')} />
                        </figure>
                        <Menu
                            ref={menu}
                            props={[
                                {
                                    id: 0,
                                    title: 'Nâng cấp VIP',
                                },
                                {
                                    id: 1,
                                    title: 'Mua code VIP',
                                },
                                {
                                    id: 2,
                                    title: 'Danh sách chặn',
                                },
                                {
                                    id: 3,
                                    title: 'Tải lên',
                                },
                                { id: 4, title: 'Đăng xuất' },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
