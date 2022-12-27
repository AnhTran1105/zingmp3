import classNames from 'classnames/bind';
import styles from './PlaylistSection.module.scss';

const cx = classNames.bind(styles);

function PlaylistSection() {
    return (
        <div className={cx('playlist-section')}>
            <div className={cx('container')}>
                <h3 className={cx('title')}>
                    Nhạc hay ho của 2022 ⭐
                    <a className={cx('more-btn')} href="/">
                        TẤT CẢ
                        <i className={cx('next-btn')}></i>
                    </a>
                </h3>
                <div className={cx('content-wrapper')}>
                    <div className={cx('carousel')}>
                        <div className={cx('carousel-container')}>
                            <div className={cx('carousel-item')}></div>
                            <div className={cx('carousel-item')}></div>
                            <div className={cx('carousel-item')}></div>
                            <div className={cx('carousel-item')}></div>
                            <div className={cx('carousel-item')}></div>
                        </div>
                    </div>
                    <button className={cx('prev-btn')}>
                        <i className={cx('prev-icon')}></i>
                    </button>
                    <button className={cx('next-btn')}>
                        <i className={cx('next-icon')}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlaylistSection;
