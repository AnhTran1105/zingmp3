/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeIcon } from '~/components/Icons';
import Menu from '../Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    const [posY, setPosY] = useState(0);
    const [avatarVisible, setAvatarVisible] = useState(false);

    const [settingVisible, setSettingVisible] = useState(false);

    const handleShowAvatarMenu = () => {
        if (!avatarVisible) {
            setAvatarVisible(true);
        } else {
            setAvatarVisible(false);
        }
    };

    const handleShowSettingMenu = () => {
        if (!settingVisible) {
            setSettingVisible(true);
        } else {
            setSettingVisible(false);
        }
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
                    <Tippy
                        visible={settingVisible}
                        onClickOutside={() => {
                            setSettingVisible(false);
                        }}
                        delay={[0, 500]}
                        offset={[20, 0]}
                        interactive
                        render={(attrs) => (
                            <Menu
                                {...attrs}
                                props={[
                                    {
                                        id: 0,
                                        title: 'Trình phát nhạc',
                                        prefixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1ZM8.70826 5.88759C7.9771 5.40235 7 5.92659 7 6.80412V13.1951C7 14.0727 7.9771 14.5969 8.70826 14.1117L13.5232 10.9161C14.1789 10.481 14.1789 9.51823 13.5232 9.0831L8.70826 5.88759ZM8 6.80412C8 6.72434 8.08883 6.67669 8.1553 6.7208L12.9702 9.9163C13.0298 9.95586 13.0298 10.0434 12.9702 10.0829L8.1553 13.2784C8.08883 13.3226 8 13.2749 8 13.1951V6.80412Z"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                        postfixIcon: {
                                            type: 'pseudo',
                                            icon: '\\41',
                                        },
                                    },
                                    {
                                        id: 1,
                                        title: 'Giao diện',
                                        prefixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M15 9.0001V3.68056L14.3894 3.78233C13.4241 3.94321 12.434 3.86553 11.5056 3.55606L9.68377 2.94878L8.64856 2.60371C8.43573 2.53276 8.21878 2.48031 8 2.4462V6.5001C8 6.77624 7.77614 7.0001 7.5 7.0001C7.22386 7.0001 7 6.77624 7 6.5001V2.41688C6.51535 2.46358 6.0387 2.59878 5.59479 2.82073L5 3.11813V9.0001H15ZM8 12.0001C6.69378 12.0001 5.58254 11.1653 5.17071 10.0001L14.8293 10.0001C14.4175 11.1653 13.3062 12.0001 12 12.0001H11H9H8ZM9 13.0001V16.0001C9 16.5524 9.44772 17.0001 10 17.0001C10.5523 17.0001 11 16.5524 11 16.0001V13.0001H9ZM8 13.0001L8 16.0001C8 17.1047 8.89543 18.0001 10 18.0001C11.1046 18.0001 12 17.1047 12 16.0001V13.0001C14.2091 13.0001 16 11.2092 16 9.0001V3.09033C16 2.78136 15.7226 2.54634 15.4178 2.59713L14.225 2.79593C13.4205 2.93001 12.5955 2.86527 11.8218 2.60738L10 2.0001L8.96479 1.65503C7.70676 1.23568 6.33367 1.33326 5.14758 1.92631L4 2.5001V9.0001C4 11.2092 5.79086 13.0001 8 13.0001Z"
                                                        fillOpacity="0.8"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                        postfixIcon: {
                                            type: 'pseudo',
                                            icon: '\\41',
                                        },
                                    },
                                    {
                                        id: 4,
                                        line: true,
                                    },
                                    {
                                        id: 2,
                                        title: 'Giới thiệu',
                                        prefixIcon: { type: 'pseudo', icon: '\\e9e4' },
                                    },
                                    {
                                        id: 3,
                                        title: 'Liên hệ',
                                        prefixIcon: { type: 'pseudo', icon: '\\e9c4' },
                                        postfixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                                        stroke="currentColor"
                                                        strokeOpacity="0.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                    },
                                    {
                                        id: 5,
                                        title: 'Quảng cáo',
                                        prefixIcon: { type: 'pseudo', icon: '\\e9c2' },
                                        postfixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                                        stroke="currentColor"
                                                        strokeOpacity="0.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                    },
                                    {
                                        id: 6,
                                        title: 'Thỏa thuận sử dụng',
                                        prefixIcon: { type: 'pseudo', icon: '\\21' },
                                        postfixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                                        stroke="currentColor"
                                                        strokeOpacity="0.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                    },
                                    {
                                        id: 7,
                                        title: 'Chính sách bảo mật',
                                        prefixIcon: { type: 'pseudo', icon: '\\e983' },
                                        postfixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                                        stroke="currentColor"
                                                        strokeOpacity="0.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                    },
                                ]}
                            />
                        )}
                    >
                        <div onClick={handleShowSettingMenu} className={cx('setting-item')}>
                            <button className={cx('btn', 'gear-icon')} tabIndex="0">
                                <i className={cx('icon', 'gear-icon')}></i>
                            </button>
                        </div>
                    </Tippy>

                    <Tippy
                        visible={avatarVisible}
                        onClickOutside={() => {
                            setAvatarVisible(false);
                        }}
                        delay={[0, 500]}
                        offset={[19, 0]}
                        interactive
                        render={(attrs) => (
                            <Menu
                                {...attrs}
                                props={[
                                    {
                                        id: 0,
                                        title: 'Nâng cấp VIP',
                                        prefixIcon: {
                                            type: 'pseudo',
                                            icon: '\\ea73',
                                        },
                                        postfixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                                        stroke="currentColor"
                                                        strokeOpacity="0.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                    },
                                    {
                                        id: 1,
                                        title: 'Mua code VIP',
                                        prefixIcon: {
                                            type: 'pseudo',
                                            icon: '\\ea73',
                                        },
                                        postfixIcon: {
                                            type: 'svg',
                                            icon: (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                                        stroke="currentColor"
                                                        strokeOpacity="0.4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            ),
                                        },
                                    },
                                    {
                                        id: 2,
                                        title: 'Danh sách chặn',
                                        prefixIcon: { type: 'pseudo', icon: '\\e9d1' },
                                    },
                                    {
                                        id: 3,
                                        title: 'Tải lên',
                                        prefixIcon: { type: 'pseudo', icon: '\\21' },
                                    },
                                    {
                                        id: 4,
                                        line: true,
                                    },
                                    { id: 5, title: 'Đăng xuất', prefixIcon: { type: 'pseudo', icon: '\\3a' } },
                                ]}
                            />
                        )}
                    >
                        <div className={cx('avatar')} onClick={handleShowAvatarMenu}>
                            <figure className={cx('image')}>
                                <img alt="" src={require('~/assets/images/profile.jpg')} />
                            </figure>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
