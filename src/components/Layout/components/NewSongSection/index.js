import classNames from 'classnames/bind';
import styles from './NewSongSection.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function NewSongSection({ props }) {
    const renderItem = props.map((item) => {
        return (
            <div
                key={item.id}
                className={cx('carousel-item', item.id % 3 === 0 || item.id % 3 === 2 ? 'nav-margin' : 'padding')}
            >
                <div className={cx('new-release-item')}>
                    <div key={item.id} className={cx('media')}>
                        <div className={cx('media-left')}>
                            <div className={cx('song-thumb')}>
                                <figure className={cx('image')}>
                                    <img src={item.img} alt="" />
                                </figure>
                                <div className={cx('opacity')}></div>
                                <div className={cx('action')}>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon', 'play-svg')}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('media-right')}>
                            <div>
                                <div className={cx('title')}>
                                    <span>{item.songName}</span>
                                </div>
                                <h3 className={cx('subtitle')}>
                                    {item.artists.map((artist, i) => {
                                        return i + 1 < item.artists.length ? (
                                            <Fragment key={artist}>
                                                <a className={cx('is-ghost')} href="/">
                                                    {artist}
                                                </a>
                                                ,{' '}
                                            </Fragment>
                                        ) : (
                                            <Fragment key={artist}>
                                                <a className={cx('is-ghost')} href="/">
                                                    {artist}
                                                </a>
                                            </Fragment>
                                        );
                                    })}
                                </h3>
                            </div>
                            <div>
                                <div className={cx('order')}>
                                    <p style={{ transform: 'skew(-10deg)' }}>#</p>
                                    <span>{item.order}</span>
                                </div>
                                <div className={cx('time-release')}>
                                    <span>{item.timeRelease}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={cx('new-song-section')}>
            <div className={cx('title')}>
                Nhạc Mới
                <a className={cx('next-btn')} href="/">
                    TẤT CẢ
                    <i className={cx('next-icon', 'icon')}></i>
                </a>
            </div>
            <div className={cx('carousel')}>{renderItem}</div>
        </div>
    );
}

export default NewSongSection;
