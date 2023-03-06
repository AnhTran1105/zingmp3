import classNames from 'classnames/bind';
import styles from './ArtistsSection.module.scss';
import { useState, useEffect } from 'react';
import React from 'react';

const cx = classNames.bind(styles);

function ArtistsSection({ props }) {
    const [time, setTime] = useState(Date.now());
    const [offsetX, setOffSetX] = useState(0);
    const transformStyle = {
        transform: `translateX(${offsetX}px)`,
    };

    const handleRightTransform = () => {
        setOffSetX(offsetX - 690.28);
    };

    const handleLeftTransform = () => {
        setOffSetX(offsetX + 690.28);
    };

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 5000);
        if (offsetX === 0) handleRightTransform();
        else handleLeftTransform();
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

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
            <div className={cx('carousel-container')}>
                <div className={cx('carousel-wrapper')}>
                    <div className={cx('carousel')} style={transformStyle}>
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
                        disabled={offsetX === -690.28 ? true : false}
                        onClick={handleRightTransform}
                        className={cx('btn', 'next-btn', offsetX === -690.28 ? 'disabled' : '')}
                    >
                        <i className={cx('icon', 'go-right-icon')}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArtistsSection;
