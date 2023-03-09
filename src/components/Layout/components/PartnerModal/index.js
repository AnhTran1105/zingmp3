import classNames from 'classnames/bind';
import styles from './PartnerModal.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

const PartnerModal = React.forwardRef(({ props }, ref) => {
    const handleCloseModal = () => {
        ref.current.style.visibility = 'hidden';
    };

    const renderItems = props.map((item) => {
        return (
            <div key={item.id} className={cx('item')}>
                <div className={cx('content')}>
                    <figure className={cx('image')}>
                        <img src={item.img} alt="" />
                    </figure>
                </div>
            </div>
        );
    });

    return (
        <div ref={ref} className={cx('partner-modal')}>
            <div className={cx('modal')}>
                <div className={cx('modal-content')}>
                    <h3 className={cx('modal-title')}>đối tác âm nhạc</h3>
                    <button onClick={handleCloseModal} className={cx('btn', 'close-btn')}>
                        <i className={cx('icon', 'close-icon')}></i>
                    </button>
                    <div className={cx('modal-items')}>{renderItems}</div>
                </div>
            </div>
        </div>
    );
});

export default PartnerModal;
