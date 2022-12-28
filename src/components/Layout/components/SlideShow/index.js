import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import ReactDOM from 'react-dom';
import React from 'react';

const cx = classNames.bind(styles);

function SlideShow() {
    function showSlides() {
        var slides = document.getElementsByClassName('gallery-item');
        var a = ReactDOM.findDOMNode(slides);
        console.log(slides);
    }
    return (
        <div className={cx('container')}>
            <div className={cx('gallery')}>
                <div className={cx('gallery-container')}>
                    <div className={cx('zm-gallery-prev')}>
                        <button onClick={showSlides} className={cx('gallery-prev-btn', 'gallery-btn')}>
                            <i className={cx('prev-icon', 'icon')}></i>
                        </button>
                    </div>
                    <div className={cx('gallery-item', 'gallery-item-prev')}>
                        <div className={cx('zm-card')}>
                            <a title="" href="/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Wren-Evans-Wren-Evans/68BZI9C7.html">
                                <div className={cx('zm-card-image')}>
                                    <div className={cx('image')}>
                                        <img
                                            src="https://photo-zmp3.zmdcdn.me/banner/5/8/0/4/5804119a8ff7b308edd80cee2d1e8cd1.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('zm-card-content')}>
                                    <div className={cx('title')}></div>
                                    <div className={cx('sub-title')}></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={cx('gallery-item', 'gallery-item-first')}>
                        <div className={cx('zm-card')}>
                            <a title="" href="/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Wren-Evans-Wren-Evans/68BZI9C7.html">
                                <div className={cx('zm-card-image')}>
                                    <div className={cx('image')}>
                                        <img
                                            src="https://photo-zmp3.zmdcdn.me/banner/6/6/2/8/6628ff13da7c3ae5c2484027460310df.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('zm-card-content')}>
                                    <div className={cx('title')}></div>
                                    <div className={cx('sub-title')}></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={cx('gallery-item', 'gallery-item-next')}>
                        <div className={cx('zm-card')}>
                            <a title="" href="/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Wren-Evans-Wren-Evans/68BZI9C7.html">
                                <div className={cx('zm-card-image')}>
                                    <div className={cx('image')}>
                                        <img
                                            src="https://photo-zmp3.zmdcdn.me/banner/5/b/7/1/5b71ad33e1bccb39423056628925a278.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('zm-card-content')}>
                                    <div className={cx('title')}></div>
                                    <div className={cx('sub-title')}></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <div className={cx('gallery-item', 'gallery-item-selected')}>
                                    <div className={cx('zm-card')}>
                                        <a
                                            title=""
                                            href="/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Wren-Evans-Wren-Evans/68BZI9C7.html"
                                        >
                                            <div className={cx('zm-card-image')}>
                                                <div className={cx('image')}>
                                                    <img
                                                        src="https://photo-zmp3.zmdcdn.me/banner/8/c/c/6/8cc6293077b7b2042eddcb836648a15b.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('zm-card-content')}>
                                                <div className={cx('title')}></div>
                                                <div className={cx('sub-title')}></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('gallery-item', 'gallery-item-last')}>
                                    <div className={cx('zm-card')}>
                                        <a
                                            title=""
                                            href="/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Wren-Evans-Wren-Evans/68BZI9C7.html"
                                        >
                                            <div className={cx('zm-card-image')}>
                                                <div className={cx('image')}>
                                                    <img
                                                        src="https://photo-zmp3.zmdcdn.me/banner/c/1/2/2/c1227d8e08dbe28fb2ab73bc4710a268.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('zm-card-content')}>
                                                <div className={cx('title')}></div>
                                                <div className={cx('sub-title')}></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('gallery-item', 'gallery-item-add')}>
                                    <div className={cx('zm-card')}>
                                        <a
                                            title=""
                                            href="/album/Nhung-Bai-Hat-Hay-Nhat-Cua-Wren-Evans-Wren-Evans/68BZI9C7.html"
                                        >
                                            <div className={cx('zm-card-image')}>
                                                <div className={cx('image')}>
                                                    <img
                                                        src="https://photo-zmp3.zmdcdn.me/banner/c/e/a/f/ceafd7e7ba92058785c8138919a8d667.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('zm-card-content')}>
                                                <div className={cx('title')}></div>
                                                <div className={cx('sub-title')}></div>
                                            </div>
                                        </a>
                                    </div>
                                </div> */}
                    <div className={cx('zm-gallery-next')}>
                        <button className={cx('gallery-next-btn', 'gallery-btn')}>
                            <i className={cx('next-icon', 'icon')}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideShow;
