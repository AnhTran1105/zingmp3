import classNames from 'classnames/bind';
import styles from './PlaylistSection.module.scss';
import ReactDOM from 'react-dom';

const cx = classNames.bind(styles);

function PlaylistSection({
    numOfElements = 3,
    sectionTitle,
    cardImage = [],
    cardTitle = [],
    artists = [[]],
    playlistDes = [],
}) {
    function renderCarouselContainer() {
        return;
        <div className={cx('playlist-section')}>
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
                        <div id={cx('root')} className={cx('carousel-container')}></div>
                    </div>
                </div>
            </div>
        </div>;
    }

    return (
        <div className={cx('playlist-section')}>
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
                        <div id={cx('root')} className={cx('carousel-container')}>
                            <div className={cx('carousel-item')}>
                                <div className={cx('zm-card')}>
                                    <div className={cx('card-content')}>
                                        <a
                                            title={cardTitle[0]}
                                            href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                        >
                                            <div className={cx('card-image')}>
                                                <figure className={cx('image')}>
                                                    <img src={cardImage[0]} alt="" />
                                                </figure>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('card-info')}>
                                        <h4 className={cx('title')}>
                                            <a
                                                title={cardTitle[0]}
                                                href="/album/10-Nghe-Si-Xuat-Sac-2022-Hoang-Thuy-Linh-AMEE-MONO-Ha-Nhi/6B7EI9ZF.html"
                                            >
                                                <span>{cardTitle[0]}</span>
                                            </a>
                                        </h4>
                                        {artists.length > 1 ? (
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                    {artists[0][0]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/AMEE">
                                                    {artists[0][1]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                    {artists[0][2]}
                                                </a>
                                                ...
                                            </h3>
                                        ) : (
                                            <h3 className={cx('subtitle')}>
                                                <span>{playlistDes[0]}</span>
                                            </h3>
                                        )}
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
                                        {artists.length > 1 ? (
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                    {artists[1][0]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/AMEE">
                                                    {artists[1][1]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                    {artists[1][2]}
                                                </a>
                                                ...
                                            </h3>
                                        ) : (
                                            <h3 className={cx('subtitle')}>
                                                <span>{playlistDes[1]}</span>
                                            </h3>
                                        )}
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
                                        {artists.length > 1 ? (
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                    {artists[2][0]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/AMEE">
                                                    {artists[2][1]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                    {artists[2][2]}
                                                </a>
                                                ...
                                            </h3>
                                        ) : (
                                            <h3 className={cx('subtitle')}>
                                                <span>{playlistDes[2]}</span>
                                            </h3>
                                        )}
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
                                        {artists.length > 1 ? (
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                    {artists[3][0]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/AMEE">
                                                    {artists[3][1]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                    {artists[3][2]}
                                                </a>
                                                ...
                                            </h3>
                                        ) : (
                                            <h3 className={cx('subtitle')}>
                                                <span>{playlistDes[3]}</span>
                                            </h3>
                                        )}
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
                                        {artists.length > 1 ? (
                                            <h3 className={cx('subtitle')}>
                                                <a className={cx('is-ghost')} href="/Hoang-Thuy-Linh">
                                                    {artists[4][0]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/AMEE">
                                                    {artists[4][1]}
                                                </a>
                                                ,{' '}
                                                <a className={cx('is-ghost')} href="/nghe-si/MONO-Nguyen-Viet-Hoang">
                                                    {artists[4][2]}
                                                </a>
                                                ...
                                            </h3>
                                        ) : (
                                            <h3 className={cx('subtitle')}>
                                                <span>{playlistDes[4]}</span>
                                            </h3>
                                        )}
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

export default PlaylistSection;
