import classNames from 'classnames/bind';
import styles from './ArtistsSection.module.scss';

const cx = classNames.bind(styles);

function ArtistsSection({ props }) {
    const renderItem = props.map((item) => {
        return (
            <div key={item.id} className={cx('carousel-item')}>
                <a href="#sfd" className={cx('artist')}>
                    <figure className={cx('image')}>
                        <img src={item.img} alt="" />
                    </figure>
                </a>
            </div>
        );
    });

    return (
        <div className={cx('artists-section')}>
            <div className={cx('carousel-wrapper')}>
                <div className={cx('carousel')}>{renderItem}</div>
                <button className={cx('btn', 'prev-btn')}>
                    <i className={cx('icon', 'go-left-icon')}></i>
                </button>
                <button className={cx('btn', 'next-btn')}>
                    <i className={cx('icon', 'go-right-icon')}></i>
                </button>
            </div>
        </div>
    );
}

export default ArtistsSection;
