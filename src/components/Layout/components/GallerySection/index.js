import classNames from 'classnames/bind';
import styles from './GallerySection.module.scss';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

const offSetValues = [0, 0, 0, 0, 0, 0];
let count = 0;
let clicked = false;

function GallerySection({ props }) {
    const [offSetX, setOffSetX] = useState(offSetValues);
    const [time, setTime] = useState(Date.now());
    const galleryItems = useRef([]);
    const prevOffSetX = useRef([]);

    // 200 100 0

    function changeArray(arr) {
        let flag = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] <= -300 && flag === false) {
                flag = true;
                arr[i] = 300 - i * 100;
            }
            arr[i] = arr[i] - 100;
        }
        return arr;
    }

    useEffect(() => {
        setTimeout(() => {}, 15000);
    });

    useEffect(() => {
        prevOffSetX.current = offSetX;
        count++;
        let interval;

        if (clicked === true) {
            clicked = false;
            setTimeout(() => {
                interval = setInterval(() => setTime(Date.now()), 6000);
            }, 9000);
        } else {
            interval = setInterval(() => setTime(Date.now()), 6000);
        }

        if (count > 1) {
            setOffSetX(changeArray(offSetX));
        }
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    const handleLeftTransform = () => {
        clicked = true;
        setOffSetX(changeArray(offSetX));
        for (let i = 0; i < galleryItems.current.length; i++) {
            galleryItems.current[i].style.transform = `translateX(${offSetX[i]}%)`;
        }
    };

    const handleRightTransform = () => {
        setOffSetX(prevOffSetX.current);
        for (let i = 0; i < galleryItems.current.length; i++) {
            galleryItems.current[i].style.transform = `translateX(${offSetX[i]}%)`;
        }
    };

    const renderItem = props.map((item, i) => {
        return (
            <div
                ref={(el) => (galleryItems.current[i] = el)}
                style={{ transform: `translateX(${offSetX[i]}%)` }}
                key={item.id}
                className={cx('gallery-item')}
            >
                <div className={cx('zm-card')}>
                    <a href="#dsaf">
                        <div className={cx('card-image')}>
                            <figure className={cx('image')}>
                                <img src={item.img} alt="" />
                            </figure>
                        </div>
                    </a>
                </div>
            </div>
        );
    });

    return (
        <div className={cx('gallery-section')}>
            <div className={cx('gallery-container')}>
                <div className={cx('gallery-wrapper')}>
                    <div className={cx('gallery-prev')}>
                        <button onClick={handleLeftTransform} className={cx('btn', 'prev-btn')}>
                            <i className={cx('icon', 'go-left-icon')}></i>
                        </button>
                    </div>
                    {renderItem}
                    <div className={cx('gallery-next')}>
                        <button onClick={handleRightTransform} className={cx('btn', 'next-btn')}>
                            <i className={cx('icon', 'go-right-icon')}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GallerySection;
