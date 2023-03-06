import classNames from 'classnames/bind';
import styles from './GallerySection.module.scss';
import { useState, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

let offSetValues = [0, 0, 0, 0, 0, 0];

function GallerySection({ props }) {
    const [offSetX, setOffSetX] = useState(offSetValues[0]);
    const [time, setTime] = useState(Date.now());

    const galleryItem = useRef([]);

    function changeArray(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] <= -300) {
                arr[i] = 300 - i * 100;
                break;
            }
        }

        for (var j = 0; j < arr.length; j++) {
            arr[j] = arr[j] - 100;
        }
        return arr;
    }

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 4000);
        setOffSetX(changeArray(offSetValues));
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    const renderItem = props.map((item, i) => {
        return (
            <div
                ref={(el) => (galleryItem.current[i] = el)}
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
                        <button className={cx('btn', 'prev-btn')}>
                            <i className={cx('icon', 'go-left-icon')}></i>
                        </button>
                    </div>
                    {renderItem}
                    <div className={cx('gallery-next')}>
                        <button className={cx('btn', 'next-btn')}>
                            <i className={cx('icon', 'go-right-icon')}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GallerySection;
