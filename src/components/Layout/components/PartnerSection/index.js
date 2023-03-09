import classNames from 'classnames/bind';
import styles from './PartnerSection.module.scss';
import PartnerModal from '../PartnerModal';
import { useRef } from 'react';
import React from 'react';

const cx = classNames.bind(styles);

function PartnerSection({ props }) {
    const modal = useRef();

    const handleShowModal = () => {
        modal.current.style.visibility = 'visible';
    };

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
        <div>
            <div className={cx('partner-section')}>
                <h3 className={cx('title')}>
                    <span onClick={handleShowModal}>đối tác âm nhạc</span>
                </h3>
                <div className={cx('carousel')}>{renderTopRow}</div>
                <div className={cx('carousel')}>{renderBottomRow}</div>
            </div>
            <PartnerModal ref={modal} props={props} />
        </div>
    );
}

export default PartnerSection;
