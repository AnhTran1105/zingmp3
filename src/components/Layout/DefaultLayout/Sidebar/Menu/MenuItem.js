import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon1, icon2, endIcon, fontWeight }) {
    let activeStyles = {
        marginLeft: 0,
        backgroundColor: 'var(--alpha-bg)',
        color: 'var(--text-item-hover)',
        borderLeft: '3px solid var(--purple-primary)',
    };

    return (
        <div className={cx('wrapper')}>
            <NavLink className={cx('nav')} to={to} style={({ isActive }) => (isActive ? activeStyles : undefined)}>
                <span className={icon1 ? cx('icon') : null}>{icon1}</span>
                <span style={{ fontWeight: fontWeight }} className={cx('title')}>
                    {title}
                </span>
                <span className={cx('icon')}>{icon2}</span>
                <span className={cx('end-icon')}>{endIcon}</span>
            </NavLink>
        </div>
    );
}

export default MenuItem;
