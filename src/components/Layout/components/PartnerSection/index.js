import classNames from 'classnames/bind';
import styles from './PartnerSection.module.scss';

const cx = classNames.bind(styles);

function PartnerSection({ props }) {
    const renderTopRow = props.map((item, i) => {
        return (
            i < props.length / 2 && (
                <div key={item.id} className={cx('row')}>
                    <div className={cx('item')}>
                        <div className={cx('content')}>
                            <figure className={cx('image')}>
                                <img src={item.img} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            )
        );
    });

    const renderBottomRow = props.map((item, i) => {
        return (
            i >= props.length / 2 && (
                <div key={item.id} className={cx('row')}>
                    <div className={cx('item')}>
                        <div className={cx('content')}>
                            <figure className={cx('image')}>
                                <img src={item.img} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            )
        );
    });
    return (
        <div className={cx('partner-section')}>
            <h3 className={cx('title')}>
                <span>đối tác âm nhạc</span>
            </h3>
            <div className={cx('carousel')}>{renderTopRow}</div>
            <div className={cx('carousel')}>{renderBottomRow}</div>
        </div>
    );
}

export default PartnerSection;
