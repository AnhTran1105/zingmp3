import classNames from 'classnames/bind';
import styles from './HomeChartSection.module.scss';

const cx = classNames.bind(styles);
const canvasStyles = {
    display: 'block',
    height: '300px',
    width: '653px',
};

function HomeChartSection({ props }) {
    return (
        <div className={cx('homechart-section')}>
            <div className={cx('blur-bg')}></div>
            <div className={cx('alpha-bg')}></div>
            <div className={cx('header')}>
                <a href="#zing-chart">#zingchart</a>
                <button className={cx('btn', 'play-btn')}>
                    <i className={cx('icon', 'play-icon')}></i>
                </button>
            </div>
            <div className={cx('columns')}>
                <div className={cx('left-column')}>
                    <div className={cx('list')}>
                        <div className={cx('song-item')}>
                            <div className={cx('item')}>
                                <div className={cx('media')}>
                                    <div className={cx('media-left')}>
                                        <div className={cx('song-prefix')}>
                                            <span className={cx('number')}>1</span>

                                            <div className={cx('sort')}>
                                                <i className={cx('icon', 'icon-balance')}></i>
                                            </div>
                                        </div>
                                        <div className={cx('song-thumb')}>
                                            <figure className={cx('song-image')}>
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div className={cx('opacity')}></div>
                                            <div className={cx('actions-container')}>
                                                <div className={cx('actions')}>
                                                    <button className={cx('btn', 'play-btn')}>
                                                        <i className={cx('icon', 'play-icon')}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('card-info')}>
                                            <div className={cx('title-wrapper')}>
                                                <span className={cx('title')}>Em Là Kẻ Đáng Thương</span>
                                            </div>
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Phat-Huy-T4">
                                                    Phát Huy T4
                                                </a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className={cx('media-right')}>
                                        <div className={cx('hover-items')}>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('song-item')}>
                            <div className={cx('item')}>
                                <div className={cx('media')}>
                                    <div className={cx('media-left')}>
                                        <div className={cx('song-prefix')}>
                                            <span className={cx('number')}>1</span>

                                            <div className={cx('sort')}>
                                                <i className={cx('icon', 'icon-balance')}></i>
                                            </div>
                                        </div>
                                        <div className={cx('song-thumb')}>
                                            <figure className={cx('song-image')}>
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div className={cx('opacity')}></div>
                                            <div className={cx('actions-container')}>
                                                <div className={cx('actions')}>
                                                    <button className={cx('btn', 'play-btn')}>
                                                        <i className={cx('icon', 'play-icon')}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('card-info')}>
                                            <div className={cx('title-wrapper')}>
                                                <span className={cx('title')}>Em Là Kẻ Đáng Thương</span>
                                            </div>
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Phat-Huy-T4">
                                                    Phát Huy T4
                                                </a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className={cx('media-right')}>
                                        <div className={cx('hover-items')}>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('song-item')}>
                            <div className={cx('item')}>
                                <div className={cx('media')}>
                                    <div className={cx('media-left')}>
                                        <div className={cx('song-prefix')}>
                                            <span className={cx('number')}>1</span>

                                            <div className={cx('sort')}>
                                                <i className={cx('icon', 'icon-balance')}></i>
                                            </div>
                                        </div>
                                        <div className={cx('song-thumb')}>
                                            <figure className={cx('song-image')}>
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div className={cx('opacity')}></div>
                                            <div className={cx('actions-container')}>
                                                <div className={cx('actions')}>
                                                    <button className={cx('btn', 'play-btn')}>
                                                        <i className={cx('icon', 'play-icon')}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('card-info')}>
                                            <div className={cx('title-wrapper')}>
                                                <span className={cx('title')}>Em Là Kẻ Đáng Thương</span>
                                            </div>
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Phat-Huy-T4">
                                                    Phát Huy T4
                                                </a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className={cx('media-right')}>
                                        <div className={cx('hover-items')}>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('is-center')}>
                        <a className={cx('show-more')} href="#zing-chart">
                            Xem thêm
                        </a>
                    </div>
                </div>
                <div className={cx('right-column')}>
                    <div className={cx('zm-chart-container')}>
                        <div className={cx('chartjs-size-monitor')}>
                            <div className={cx('chartjs-size-monitor-expand')}>
                                <div></div>
                            </div>
                            <div className={cx('chartjs-size-monitor-shrink')}>
                                <div></div>
                            </div>
                        </div>
                        <canvas
                            id="zm-chart"
                            height="600"
                            style={canvasStyles}
                            width="1306"
                            className={cx('chartjs-render-monitor')}
                        ></canvas>
                        <div className={cx('zm-chart-tooltip')}>
                            <div className={cx('song-data')}>
                                <div className={cx('song-left')}>
                                    <img
                                        src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg"
                                        alt=""
                                        className={cx('song-thumb')}
                                    />
                                </div>
                                <div className={cx('song-info')}>
                                    <div className={cx('song-title')}></div>
                                    <span className={cx('song-artists')}></span>
                                </div>
                                <div className={cx('song-right')}>
                                    <span>40%</span>
                                </div>
                            </div>
                            <span className={cx('caret')}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeChartSection;
