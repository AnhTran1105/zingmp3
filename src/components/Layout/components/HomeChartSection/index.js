import classNames from 'classnames/bind';
import styles from './HomeChartSection.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function HomeChartSection({ props }) {
    const renderSongList = props.map((item) => {
        return (
            <div key={item.order} className={cx('song-item', 'top'.concat(`${item.order}`))}>
                <div className={cx('item')}>
                    <div className={cx('media')}>
                        <div className={cx('media-left')}>
                            <div className={cx('song-prefix')}>
                                <span className={cx('number')}>{item.order}</span>
                                <div className={cx('sort')}>
                                    <i className={cx('icon', 'icon-balance')}></i>
                                </div>
                            </div>
                            <div className={cx('song-thumb')}>
                                <figure className={cx('song-image')}>
                                    <img src={item.img} alt="" />
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
                                    <span className={cx('title')}>{item.songName}</span>
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
                        </div>

                        <div className={cx('media-right')}>
                            <div className={cx('hover-items')}>
                                <span>{item.percentage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

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
                    <div className={cx('list')}>{renderSongList}</div>
                    <div className={cx('is-center')}>
                        <a className={cx('show-more')} href="#zing-chart">
                            Xem thêm
                        </a>
                    </div>
                </div>
                <div className={cx('right-column')}>
                    <figure className={cx('zm-chart')}>
                        <img src={require('~/assets/images/zm-chart.png')} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default HomeChartSection;
