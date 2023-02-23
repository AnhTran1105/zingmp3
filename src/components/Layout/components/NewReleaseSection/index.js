import classNames from 'classnames/bind';
import styles from './NewReleaseSection.module.scss';

const cx = classNames.bind(styles);

function NewReleaseSection({ props }) {
    const listItems = props.map((item) => (
        <div key={item.id} className={cx('list-item')}>
            <div className={cx('media')}>
                <div className={cx('media-left')}>
                    <div className={cx('song-thumb')}>
                        <figure className={cx('image')}>
                            <img src={props[0].img} alt="" />
                        </figure>
                        <div className={cx('opacity')}></div>
                        <button className={cx('play-btn')}>
                            <i className={cx('play-icon', 'icon')}></i>
                        </button>
                    </div>
                    <div className={cx('card-info')}>
                        <div className={cx('title')}>
                            <span>{props[0].songName}</span>
                        </div>
                        <h3 className={cx('subtitle')}>
                            <a className={cx('is-ghost')} href="/">
                                {props[0].artist}
                            </a>
                        </h3>
                        <div className={cx('time-release')}>
                            <span>{props[0].timeRelease}</span>
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
    ));

    return (
        <div className={cx('new-release-section')}>
            <div className={cx('title')}>Mới Phát Hành</div>
            <div className={cx('genres')}>
                <button className={cx('genre-btn', 'active')}>Tất Cả</button>
                <button className={cx('genre-btn')}>Việt Nam</button>
                <button className={cx('genre-btn')}>Quốc Tế</button>
            </div>
            <div className={cx('columns')}>
                <div className={cx('column')}>
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                </div>
                <div className={cx('column')}>
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                </div>
                <div className={cx('column')}>
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                    <div className={cx('list-item')}>
                        <div className={cx('media')}>
                            <div className={cx('media-left')}>
                                <div className={cx('song-thumb')}>
                                    <figure className={cx('image')}>
                                        <img src={props[0].img} alt="" />
                                    </figure>
                                    <div className={cx('opacity')}></div>
                                    <button className={cx('play-btn')}>
                                        <i className={cx('play-icon', 'icon')}></i>
                                    </button>
                                </div>
                                <div className={cx('card-info')}>
                                    <div className={cx('title')}>
                                        <span>{props[0].songName}</span>
                                    </div>
                                    <h3 className={cx('subtitle')}>
                                        <a className={cx('is-ghost')} href="/">
                                            {props[0].artist}
                                        </a>
                                    </h3>
                                    <div className={cx('time-release')}>
                                        <span>{props[0].timeRelease}</span>
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
                </div>
            </div>
        </div>
    );
}

export default NewReleaseSection;