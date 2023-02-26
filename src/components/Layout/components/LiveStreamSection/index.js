import classNames from 'classnames/bind';
import styles from './LiveStreamSection.module.scss';

const cx = classNames.bind(styles);

function LiveStreamSection({ props }) {
    return (
        <div className={cx('livestream-section')}>
            <h3 className={cx('title')}>
                Radio Nổi Bật
                <a href="/radio" className={cx('discovery-btn')}>
                    Tất Cả
                    <i className={cx('icon', 'next-icon')}></i>
                </a>
            </h3>
        </div>
    );
}

export default LiveStreamSection;
