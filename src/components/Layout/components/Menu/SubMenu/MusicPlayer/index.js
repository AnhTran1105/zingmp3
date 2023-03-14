import classNames from 'classnames/bind';
import styles from './MusicPlayer.module.scss';

const cx = classNames.bind(styles);
function MusicPlayer() {
    const styles = {
        borderRadius: '50%',
        backgroundColor: 'var(--progressbar-active-bg)',
        transform: 'translate(117px, -3.5px)',
    };

    return (
        <div className={cx('sub-menu')}>
            <ul className={cx('menu-items')}>
                <li className={cx('crossfade-setting')}>
                    <button className={cx('btn', 'menu-btn')}>
                        <span className={cx('item-title')}>Chuyển bài mượt mà (Crossfade)</span>
                        <i className={cx('icon', 'postfix-icon')}>
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
                    <div className={cx('duration-bar', 'disabled')}>
                        <div className={cx('slider-bar')}>
                            <div
                                aria-valuemax="15"
                                aria-valuemin="1"
                                aria-valuenow="8"
                                draggable="false"
                                role="slider"
                                className={cx('slider-handle')}
                                style={styles}
                            ></div>
                        </div>
                    </div>
                    <p className={cx('time-crossfade')}>8 giây</p>
                </li>
                <li className={cx('gapless-setting')}>
                    <button className={cx('btn', 'menu-btn')}>
                        Bỏ qua khoảng lặng
                        <br></br>
                        (Gapless playback)
                        <i className={cx('icon', 'postfix-icon')}>
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
                    <h3 className={cx('subtitle')}>Loại bỏ đoạn im lặng khi chuyển bài hát</h3>
                </li>
                <li className={cx('line-separator')}></li>
                <li>
                    <button className={cx('btn', 'menu-btn')}>
                        Luôn phát nhạc toàn màn hình
                        <i className={cx('icon', 'postfix-icon')}>
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
                <li className={cx('quality-setting')}>
                    <p>Chất lượng nhạc</p>
                    <div className={cx('buttons')}>
                        <button className={cx('btn', 'quality-btn')}>
                            <span>SQ • 128</span>
                        </button>
                        <button className={cx('btn', 'quality-btn')}>
                            <span className={cx('selected')}>HQ • 320</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MusicPlayer;
