import classNames from 'classnames/bind';
import styles from './GallerySection.module.scss';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

const offSetValues = [
    [-300, -300, -300, -300, -300, -300],
    [200, -400, -400, -400, -400, -400],
    [100, 100, -500, -500, -500, -500],
    [0, 0, 0, -600, -600, -600],
    [-100, -100, -100, -100, -700, -700],
    [-200, -200, -200, -200, -200, -800],
];
let count = 0;
let clicked = false;
let index = 0;

function GallerySection({ props }) {
    const [offSetX, setOffSetX] = useState(offSetValues[0]);
    const [time, setTime] = useState(Date.now());
    const galleryItems = useRef([]);

    function leftTransform(arr) {
        if (index !== arr.length - 1) index++;
        else index = 0;
        return arr[index];
    }

    function rightTransform(arr) {
        if (index !== 0) index--;
        else index = arr.length - 1;
        return arr[index];
    }

    useEffect(() => {
        count++;
        let interval;

        if (!clicked) {
            interval = setInterval(() => setTime(Date.now()), 4000);
        } else {
            setTimeout(() => {
                clicked = false;
                setTime(Date.now());
            }, 15000);
        }

        if (count > 2 && !clicked) {
            setOffSetX(leftTransform(offSetValues));
        }

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    const handleLeftTransform = () => {
        clicked = true;

        setOffSetX(leftTransform(offSetValues));
        for (let i = 0; i < galleryItems.current.length; i++) {
            galleryItems.current[i].style.transform = `translateX(${offSetX[i]}%)`;
        }
    };

    const handleRightTransform = () => {
        clicked = true;

        setOffSetX(rightTransform(offSetValues));
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
