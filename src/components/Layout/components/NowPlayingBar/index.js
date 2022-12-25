import classNames from 'classnames/bind';
import styles from './NowPlayingBar.module.scss';

const cx = classNames.bind(styles);

function NowPlayingBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-level')}>
                <div className={cx('now-song')}>
                    <div className={cx('song-img')}>
                        <img src={require('~/assets/images/songimg.webp')} alt="song-ava" />
                    </div>
                    <div className={cx('song-info')}>
                        <span className={cx('song-title')}>Không Phải Em Đúng Không</span>
                        <span className={cx('song-artist')}>Dương Hoàng Yến, Bùi Anh Tuấn</span>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('like-action', 'hover-border')}>
                        <i className={cx('icon', 'like-icon')}></i>
                    </div>
                    <div className={cx('more-action', 'hover-border')}>
                        <i className={cx('icon', 'more-icon')}></i>
                    </div>
                </div>
            </div>
            <div className={cx('center-level')}>
                <div className={cx('center-items')}>
                    <div className={cx('center-actions')}>
                        <button className={cx('shuffle-btn', 'btn', 'hover-border')}>
                            <i className={cx('icon', 'shuffle-icon')}></i>
                        </button>
                        <button className={cx('pre-btn', 'btn', 'hover-border')}>
                            <i className={cx('icon', 'pre-icon')}></i>
                        </button>
                        <button className={cx('play-btn', 'btn')}>
                            <i className={cx('icon', 'play-icon')}></i>
                        </button>
                        <button className={cx('next-btn', 'btn', 'hover-border')}>
                            <i className={cx('icon', 'next-icon')}></i>
                        </button>
                        <button className={cx('repeat-btn', 'btn', 'hover-border')}>
                            <i className={cx('icon', 'repeat-icon')}></i>
                        </button>
                    </div>
                </div>
                <div className={cx('center-items', 'mar-b-5')}>
                    <span className={cx('time-left')}>00:00</span>
                    <div className={cx('progress-bar')}>
                        <div className={cx('progress')}></div>
                    </div>
                    <span className={cx('total-time')}>04:26</span>
                </div>
            </div>
            <div className={cx('right-level')}>
                <div className={cx('right-items')}>
                    <div className={cx('item')}>
                        <button className={cx('mv-btn', 'btn', 'hover-border', 'pd-l-r-3')}>
                            <i className={cx('icon', 'mv-icon')}></i>
                        </button>
                    </div>
                    <div className={cx('item')}>
                        <button className={cx('karaoke-btn', 'btn', 'hover-border', 'pd-l-r-3')}>
                            <i className={cx('icon', 'karaoke-icon')}></i>
                        </button>
                    </div>
                    <div className={cx('item')}>
                        <button className={cx('restore-btn', 'btn', 'hover-border', 'pd-l-r-3')}>
                            <i className={cx('icon', 'restore-icon')}></i>
                        </button>
                    </div>
                    <div className={cx('volumn-bar')}>
                        <button className={cx('volumn-btn', 'btn', 'hover-border')}>
                            <i className={cx('icon', 'volumn-icon')}></i>
                        </button>
                        <div className={cx('volumn-progress')}>
                            <div className={cx('slider-bar')}></div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('line-divide')}></div>
                    </div>
                    <div className={cx('item')}>
                        <button className={cx('playlist-btn', 'btn', 'expand-btn', 'mar-0')}>
                            <i className={cx('icon', 'playlist-icon')}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NowPlayingBar;
