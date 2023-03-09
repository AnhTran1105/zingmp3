import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

const Menu = React.forwardRef(({ props }, ref) => {
    const handleCloseMenu = () => {
        document.addEventListener('mousedown', () => {
            ref.current.style.visibility = 'hidden';
        });
    };

    const renderItems = props.map((item) => {
        return (
            <li key={item.id} className={cx('item')}>
                <button className={cx('btn', 'menu-btn')}>
                    <i className={cx('icon', 'prefix-icon')}></i>
                    <span className={cx('item-title')}>{item.title}</span>
                    <i className={cx('icon', 'postfix-icon')}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.5 4.5L4.5 12.5M12.5 4.5H6.5M12.5 4.5V10.5"
                                stroke="currentColor"
                                strokeOpacity="0.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </i>
                </button>
            </li>
        );
    });

    return (
        <div ref={ref} onMouseLeave={handleCloseMenu} className={cx('menu')}>
            <ul className={cx('menu-items')}>{renderItems}</ul>
        </div>
    );
});

export default Menu;
