import classNames from 'classnames/bind';
import styles from './LiveStreamSection.module.scss';

const cx = classNames.bind(styles);

function LiveStreamSection({ sectionTitle, cardImage = [], cardTitle = [], artists = [[]], livestreamDes }) {
    return (
        <div className={cx('livestream-section')}>
            <div className={cx('container')}>
                <h3 className={cx('title')}>
                    {sectionTitle}
                    <a className={cx('more-btn')} href="/">
                        TẤT CẢ
                        <i className={cx('more-icon', 'icon')}></i>
                    </a>
                </h3>
                <div className={cx('content-wrapper')}>
                    <div className={cx('carousel')}>
                        <div className={cx('carousel-container')}>
                            <div className={cx('carousel-item')}>
                                <div className={cx('zm-card')}>
                                    <div className={cx('card-content')}>
                                        <div className={cx('top-content')}>
                                            <svg class="svg" width="100%" height="100%" viewBox="0 0 100 100">
                                                <circle
                                                    class="svg-circle-bg"
                                                    stroke="rgba(255, 255, 255, 0.2)"
                                                    cx="50"
                                                    cy="50"
                                                    r="48.75"
                                                    stroke-width="2.5"
                                                ></circle>
                                                <circle
                                                    class="svg-circle"
                                                    stroke="#ff4b4a"
                                                    cx="50"
                                                    cy="50"
                                                    r="48.75"
                                                    stroke-width="2.5"
                                                    stroke-linecap="round"
                                                    stroke-dasharray="306.3052837250048"
                                                    stroke-dashoffset="224.25256465297636"
                                                    style="transition: stroke-dashoffset 850ms ease-in-out 0s;"
                                                ></circle>
                                            </svg>
                                            <div class="zm-card-image">
                                                <figure class="image cover is-48x48">
                                                    <img
                                                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/d/2/c/2d2cf53040784ff520b532e37fc08d32.jpg"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div class="opacity "></div>
                                            <figure class="image host is-48x48">
                                                <img
                                                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                            <div class="action action-play">
                                                <button class="zm-btn action-play  button" tabindex="0">
                                                    <i class="icon action-play ic-svg-play-circle"></i>
                                                </button>
                                            </div>
                                            <figure class="image label is-48x48">
                                                <img
                                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className={cx('bot-content')}>
                                            <h3 class="title">XONE Radio</h3>
                                            <h3 class="subtitle">290 đang nghe</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('carousel-item')}>
                                <div className={cx('zm-card')}>
                                    <div className={cx('card-content')}>
                                        <a
                                            title={cardTitle[1]}
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img src={cardImage[1]} alt="" />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title={cardTitle[1]}
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>{cardTitle[1]}</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/Karik">
                                                {artists[1][0]}
                                                <i className={cx('icon', 'ic-star')}></i>
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Duc-Phuc">
                                                {artists[1][1]}
                                                <i className={cx('icon', 'ic-star')}></i>
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Van-Mai-Huong">
                                                {artists[1][2]}
                                            </a>
                                            ...
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('carousel-item')}>
                                <div className={cx('zm-card')}>
                                    <div className={cx('card-content')}>
                                        <a
                                            title={cardTitle[2]}
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img src={cardImage[2]} alt="" />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title={cardTitle[2]}
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>{cardTitle[2]}</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                {artists[2][0]}
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/GREY-D-Doan-The-Lan">
                                                {artists[2][1]}
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/nghe-si/Thu-Cam">
                                                {artists[2][2]}
                                            </a>
                                            ...
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('carousel-item')}>
                                <div className={cx('zm-card')}>
                                    <div className={cx('card-content')}>
                                        <a
                                            title={cardTitle[3]}
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img src={cardImage[3]} alt="" />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title={cardTitle[3]}
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>{cardTitle[3]}</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/Miu-Le">
                                                {artists[3][0]}
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-spotlight', 'is-ghost')} href="/Karik">
                                                {artists[3][1]}
                                                <i className={cx('icon', 'ic-star')}></i>
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                {artists[3][2]}
                                            </a>
                                            ...
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('carousel-item')}>
                                <div className={cx('zm-card')}>
                                    <div className={cx('card-content')}>
                                        <a
                                            title={cardTitle[4]}
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img src={cardImage[4]} alt="" />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title={cardTitle[4]}
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>{cardTitle[4]}</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/nghe-si/Hua-Kim-Tuyen">
                                                {artists[4][0]}
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/nghe-si/Chau-Dang-Khoa">
                                                {artists[4][1]}
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Khac-Hung">
                                                {artists[4][2]}
                                            </a>
                                            ...
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveStreamSection;
