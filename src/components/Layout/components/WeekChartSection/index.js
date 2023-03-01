import classNames from 'classnames/bind';
import styles from './WeekChartSection.module.scss';

const cx = classNames.bind(styles);

function WeekChartSection({ props }) {
    const renderItem = props.map((item) => {
        return (
            <div key={item.key} className={cx('column')}>
                <div className={cx('zm-card')}>
                    <div className={cx('card-image')}>
                        <a href="#ad">
                            <figure className={cx('image')}>
                                <img src={item.img} alt="" />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className={cx('weekchart-section')}>
            <div className={cx('columns')}>{renderItem}</div>
        </div>
    );
}

export default WeekChartSection;
