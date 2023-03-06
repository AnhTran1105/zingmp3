import classNames from 'classnames/bind';
import styles from './LiveStreamSection.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
const svgStyle = {
    transititon: 'stroke-dashoffset 850ms ease-in-out 0s',
};

function LiveStreamSection({ props }) {
    const [offsetX, setOffSetX] = useState(0);

    const handleLeftTransform = () => {
        setOffSetX(offsetX + 517.71);
    };

    const handleRightTransform = () => {
        setOffSetX(offsetX - 517.71);
    };

    const transformStyle = {
        transform: `translateX(${offsetX}px)`,
    };

    const renderItem = props.map((item) => {
        return (
            <div key={item.id} className={cx('item')}>
                <div className={cx('zm-card')}>
                    <div className={cx('card-content')}>
                        <div className={cx('top-content')}>
                            <svg className={cx('svg')} width="100%" height="100%" viewBox="0 0 100 100">
                                <circle
                                    className={cx('svg-circle-bg')}
                                    stroke="rgba(255, 255, 255, 0.2)"
                                    cx="50"
                                    cy="50"
                                    r="48.75"
                                    strokeWidth="2.5"
                                ></circle>
                                <circle
                                    className={cx('svg-circle')}
                                    stroke="#ff4b4a"
                                    cx="50"
                                    cy="50"
                                    r="48.75"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray="306.3052837250048"
                                    strokeDashoffset="103.05405869369035"
                                    style={svgStyle}
                                ></circle>
                            </svg>
                            <div className={cx('content-image')}>
                                <figure className={cx('image')}>
                                    <img src={item.cardImg} alt="" />
                                </figure>
                            </div>
                            <div className={cx('opacity')}></div>
                            <figure className={cx('image', 'host')}>
                                <img src={item.hostImg} alt="" />
                            </figure>
                            <div className={cx('action-play')}>
                                <button className={cx('btn', 'play-btn')}>
                                    <i className={cx('icon', 'play-icon', 'play-icon-svg')}></i>
                                </button>
                            </div>
                            <figure className={cx('image', 'label')}>
                                <img
                                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                                    alt=""
                                />
                            </figure>
                        </div>
                        <div className={cx('bot-content')}>
                            <h3 className={cx('content-title')}>{item.title}</h3>
                            <h3 className={cx('content-subtitle')}>{item.subtitle}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className={cx('livestream-section')}>
            <h3 className={cx('title')}>
                Radio Nổi Bật
                <a href="/radio" className={cx('discovery-btn')}>
                    Tất Cả
                    <i className={cx('icon', 'go-right-icon')}></i>
                </a>
            </h3>
            <div className={cx('carousel-container')}>
                <div className={cx('carousel-wrapper')}>
                    <div style={transformStyle} className={cx('carousel')}>
                        {renderItem}
                    </div>
                    <button
                        disabled={offsetX === 0 ? true : false}
                        onClick={handleLeftTransform}
                        className={cx('btn', 'prev-btn', offsetX === 0 ? 'disabled' : '')}
                    >
                        <i className={cx('icon', 'go-left-icon')}></i>
                    </button>
                    <button
                        disabled={offsetX === -517.71 ? true : false}
                        onClick={handleRightTransform}
                        className={cx('btn', 'next-btn', offsetX === -517.71 ? 'disabled' : '')}
                    >
                        <i className={cx('icon', 'go-right-icon')}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LiveStreamSection;
