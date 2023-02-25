import classNames from 'classnames/bind';
import styles from './PlaylistSection.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function PlaylistSection({ props, sectionTitle, moreBtn = false, forFan }) {
    const listItems = props.map((item) => (
        <div key={item.id} className={cx('carousel-item')}>
            <div className={cx('zm-card')}>
                <div className={cx('card-content')}>
                    <a
                        title={item.title}
                        href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                    >
                        <div className={cx('card-image')}>
                            <figure className={cx('image')}>
                                <img src={item.img} alt="" />
                            </figure>
                            <div className={cx('opacity')}></div>
                            <div className={cx('actions')}>
                                <button className={cx('like-btn')}>
                                    <i className={cx('icon', 'like-icon')}></i>
                                </button>
                                <button className={cx('play-btn')}>
                                    <i className={cx('icon', 'play-icon', 'play-svg')}></i>
                                </button>
                                <button className={cx('more-btn')}>
                                    <i className={cx('icon', 'more-icon')}></i>
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={cx('card-info')}>
                    <h4 className={cx('title')}>
                        <a
                            title={item.title}
                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                        >
                            <span>{item.title}</span>
                        </a>
                    </h4>
                    {item.artists ? (
                        <h3 className={cx('subtitle')}>
                            {item.artists.map((artist, i) => {
                                return i + 1 < item.artists.length ? (
                                    <Fragment key={artist}>
                                        <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                            {artist}
                                        </a>
                                        ,{' '}
                                    </Fragment>
                                ) : (
                                    <Fragment key={artist}>
                                        <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                            {artist}
                                        </a>
                                    </Fragment>
                                );
                            })}
                            {item.artists.length > 2 ? '...' : ''}
                        </h3>
                    ) : (
                        <h3 className={cx('subtitle')}>
                            <span>{item.des}</span>
                        </h3>
                    )}
                </div>
            </div>
        </div>
    ));

    return (
        <div className={cx('playlist-section')}>
            <div className={cx('container')}>
                {forFan ? (
                    <div className={cx('media-header')}>
                        <div className={cx('media-left')}>
                            <a href="/Hoang-Thuy-Linh">
                                <div className={cx('card-image')}>
                                    <figure className={cx('image')}>
                                        <img src={forFan.img} alt="" />
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div className={cx('media-content')}>
                            <h3 className={cx('subtitle')}>dành cho fan</h3>
                            <h3 className={cx('title')}>
                                <a href={`/${forFan.name}`}>{forFan.name}</a>
                            </h3>
                        </div>
                    </div>
                ) : sectionTitle ? (
                    <h3 className={cx('title')}>
                        {sectionTitle}
                        {moreBtn ? (
                            <a className={cx('next-btn')} href="/">
                                TẤT CẢ
                                <i className={cx('next-icon', 'icon')}></i>
                            </a>
                        ) : (
                            ''
                        )}
                    </h3>
                ) : (
                    ''
                )}
                <div className={cx('content-wrapper')}>
                    <div className={cx('carousel')}>
                        <div className={cx('carousel-container')}>{listItems}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaylistSection;
