import classNames from 'classnames/bind';
import styles from './MainPage.module.scss';

const cx = classNames.bind(styles);

function MainPage() {
    return (
        <div className={cx('main-page')}>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('section')}></div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
