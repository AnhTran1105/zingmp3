import classNames from 'classnames/bind';
import styles from './Interface.module.scss';

const cx = classNames.bind(styles);

function Interface() {
    return (
        <div className={cx('sub-menu')}>
            <ul className={cx('menu-items')}>
                <li className={cx('theme-setting')}>
                    <div>
                        <div className={cx('top')}>
                            <span>Chủ đề</span>
                            <i className={cx('icon', 'go-right-icon')}></i>
                        </div>
                        <div className={cx('content')}>
                            <figure className={cx('image')}>
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue.jpg" alt="" />
                            </figure>
                            <h3 className={cx('title')}>Xanh Đậm</h3>
                        </div>
                    </div>
                </li>
                <li className={cx('line-separator')}></li>
                <li>
                    Hiệu ứng chuyển động
                    <button className={cx('btn', 'switch-off-btn')}>
                        <i className={cx('icon', 'switch-off-icon')}>
                            <svg id="Layer_1" x="0px" y="0px" width="24px" height="15px" viewBox="0 0 24 15">
                                <path
                                    id="Rectangle-8"
                                    className={cx('st0')}
                                    d="M7.5,0h9C20.6,0,24,3.4,24,7.5l0,0c0,4.1-3.4,7.5-7.5,7.5h-9C3.4,15,0,11.6,0,7.5l0,0 C0,3.4,3.4,0,7.5,0z"
                                    style={{ fill: '#a0a0a0' }}
                                ></path>
                                <circle
                                    id="Oval-2"
                                    className={cx('st1')}
                                    cx="7.5"
                                    cy="7.5"
                                    r="6.5"
                                    style={{
                                        fillRule: 'evenodd',
                                        clipRule: 'evenodd',
                                        fill: '#ffffff',
                                    }}
                                ></circle>
                            </svg>
                        </i>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Interface;
