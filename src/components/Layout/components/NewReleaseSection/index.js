import classNames from 'classnames/bind';
import { Fragment } from 'react';
import styles from './NewReleaseSection.module.scss';

const cx = classNames.bind(styles);

function NewReleaseSection({ props }) {
    const LeftColumnItems = props.map((item, i) => {
        return (
            i < props.length / 3 && (
                <div key={item.id} className={cx('list-item')}>
                    <div className={cx('media')}>
                        <div className={cx('media-left')}>
                            <div className={cx('song-thumb')}>
                                <figure className={cx('image')}>
                                    <img src={item.img} alt="" />
                                </figure>
                                <div className={cx('opacity')}></div>
                                <button className={cx('play-btn')}>
                                    <i className={cx('play-icon', 'icon')}></i>
                                </button>
                            </div>
                            <div className={cx('card-info')}>
                                <div className={cx('title')}>
                                    {item.songName.length < 27 ? (
                                        <span>{item.songName}</span>
                                    ) : (
                                        <span>{item.songName.slice(0, 27).concat('...')}</span>
                                    )}
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
                                <div className={cx('time-release')}>
                                    <span>{item.timeRelease}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('media-right')}>
                            <button className={cx('more-btn')}>
                                <i className={cx('more-icon', 'icon')}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        );
    });
    const MidColumnItems = props.map((item, i) => {
        return (
            i >= props.length / 3 &&
            i < (props.length / 3) * 2 && (
                <div key={item.id} className={cx('list-item')}>
                    <div className={cx('media')}>
                        <div className={cx('media-left')}>
                            <div className={cx('song-thumb')}>
                                <figure className={cx('image')}>
                                    <img src={item.img} alt="" />
                                </figure>
                                <div className={cx('opacity')}></div>
                                <button className={cx('play-btn')}>
                                    <i className={cx('play-icon', 'icon')}></i>
                                </button>
                            </div>
                            <div className={cx('card-info')}>
                                <div className={cx('title')}>
                                    {item.songName.length < 27 ? (
                                        <span>{item.songName}</span>
                                    ) : (
                                        <span>{item.songName.slice(0, 27).concat('...')}</span>
                                    )}
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
                                <div className={cx('time-release')}>
                                    <span>{item.timeRelease}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('media-right')}>
                            <button className={cx('more-btn')}>
                                <i className={cx('more-icon', 'icon')}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        );
    });
    const RightColumnItems = props.map((item, i) => {
        return (
            i >= (props.length / 3) * 2 &&
            i < props.length && (
                <div key={item.id} className={cx('list-item')}>
                    <div className={cx('media')}>
                        <div className={cx('media-left')}>
                            <div className={cx('song-thumb')}>
                                <figure className={cx('image')}>
                                    <img src={item.img} alt="" />
                                </figure>
                                <div className={cx('opacity')}></div>
                                <button className={cx('play-btn')}>
                                    <i className={cx('play-icon', 'icon')}></i>
                                </button>
                            </div>
                            <div className={cx('card-info')}>
                                <div className={cx('title')}>
                                    {item.songName.length < 27 ? (
                                        <span>{item.songName}</span>
                                    ) : (
                                        <span>{item.songName.slice(0, 27).concat('...')}</span>
                                    )}
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
                                <div className={cx('time-release')}>
                                    <span>{item.timeRelease}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('media-right')}>
                            <button className={cx('more-btn')}>
                                <i className={cx('more-icon', 'icon')}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )
        );
    });

    return (
        <div className={cx('new-release-section')}>
            <div className={cx('title')}>
                Mới Phát Hành
                <a className={cx('next-btn')} href="/">
                    TẤT CẢ
                    <i className={cx('next-icon', 'icon')}></i>
                </a>
            </div>
            <div className={cx('genres')}>
                <button className={cx('genre-btn', 'active')}>Tất Cả</button>
                <button className={cx('genre-btn')}>Việt Nam</button>
                <button className={cx('genre-btn')}>Quốc Tế</button>
            </div>
            <div className={cx('columns')}>
                <div className={cx('column')}>{LeftColumnItems}</div>
                <div className={cx('column')}>{MidColumnItems}</div>
                <div className={cx('column')}>{RightColumnItems}</div>
            </div>
        </div>
    );
}

export default NewReleaseSection;
