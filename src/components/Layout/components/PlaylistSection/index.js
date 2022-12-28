import classNames from 'classnames/bind';
import styles from './PlaylistSection.module.scss';

const cx = classNames.bind(styles);

function PlaylistSection() {
    return (
        <div className={cx('playlist-section')}>
            <div className={cx('container')}>
                <h3 className={cx('title')}>
                    Nhạc Hay Ho Của 2022 ⭐
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
                                        <a
                                            title="10 Nghệ Sĩ Xuất Sắc 2022"
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img
                                                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/a/d/0/bad05d20e4d804ec53592da82b73f8d6.jpg"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title="10 Nghệ Sĩ Xuất Sắc 2022"
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>10 Nghệ Sĩ Xuất Sắc 2022</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                Hoàng Thùy Linh
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/AMEE">
                                                AMEE
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                MONO
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
                                            title="10 Nghệ Sĩ Xuất Sắc 2022"
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img
                                                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/e/3/bfe38a668289c6fac1b6659457a3ad49.jpg"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title="10 Nghệ Sĩ Xuất Sắc 2022"
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>10 Nghệ Sĩ Xuất Sắc 2022</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/Karik">
                                                Karik<i class="icon ic-star"></i>
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Duc-Phuc">
                                                Đức Phúc<i class="icon ic-star"></i>
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Van-Mai-Huong">
                                                Văn Mai Hương
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
                                            title="Nghệ Sĩ Mới Nổi Bật 2022"
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img
                                                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title="Nghệ Sĩ Mới Nổi Bật 2022"
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>Nghệ Sĩ Mới Nổi Bật 2022</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                MONO
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/GREY-D-Doan-The-Lan">
                                                GREY D
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/nghe-si/Thu-Cam">
                                                Cầm
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
                                            title="10 Nghệ Sĩ Xuất Sắc 2022"
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img
                                                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title="10 Nghệ Sĩ Xuất Sắc 2022"
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>10 Nghệ Sĩ Xuất Sắc 2022</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/Miu-Le">
                                                Miu Lê
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-spotlight', 'is-ghost')} href="/Karik">
                                                Karik<i class="icon ic-star"></i>
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                Hoàng Thùy Linh
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
                                            title="10 Nghệ Sĩ Xuất Sắc 2022"
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img
                                                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/a/d/0/bad05d20e4d804ec53592da82b73f8d6.jpg"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title="10 Nghệ Sĩ Xuất Sắc 2022"
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>10 Nghệ Sĩ Xuất Sắc 2022</span>
                                            </a>
                                        </h4>
                                        <h3 className={cx('subtitle')}>
                                            <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                Hoàng Thùy Linh
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/AMEE">
                                                AMEE
                                            </a>
                                            ,{' '}
                                            <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                MONO
                                            </a>
                                            ...
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={cx('prev-btn')}>
                        <i className={cx('prev-icon', 'icon')}></i>
                    </button>
                    <button className={cx('next-btn')}>
                        <i className={cx('next-icon', 'icon')}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlaylistSection;
