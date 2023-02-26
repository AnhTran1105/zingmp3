import classNames from 'classnames/bind';
import styles from './EventSection.module.scss';

const cx = classNames.bind(styles);

function EventSection({ props }) {
    const renderItem = props.map((item) => {
        return (
            <div key={item.id} className={cx('item')}>
                <div className={cx('zm-card')}>
                    <div className={cx('card-image')}>
                        <figure className={cx('image')}>
                            <img src={item.img} alt="" />
                        </figure>
                        <div className={cx('opacity')}></div>
                        <div className={cx('card-content')}>
                            <span className={cx('tag')}>Sinh Nhật Sao</span>
                            <h3 className={cx('content-title')}>
                                <span>Sinh Nhật Sao x Hiền Hồ</span>
                            </h3>
                            <h3 className={cx('content-subtitle')}>
                                <span>00:00 Chủ Nhật, 26 tháng 2</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={cx('event-follow')}>
                    <div className={cx('level-left')}>
                        <div className={cx('level-item')}>
                            <div className={cx('event-followers')}>
                                <h3 className={cx('event-title')}>Lượt chúc mừng</h3>
                                <div className={cx('avatars')}>
                                    <div className={cx('avatar')}>
                                        <figure className={cx('image')}>
                                            <img
                                                src="https://s240-ava-talk-zmp3.zmdcdn.me/8/2/b/c/37/240/02dde3970953983f29f49888d81d41c2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className={cx('avatar')}>
                                        <figure className={cx('image')}>
                                            <img
                                                src="https://s240-ava-talk-zmp3.zmdcdn.me/8/2/b/c/37/240/02dde3970953983f29f49888d81d41c2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className={cx('avatar')}>
                                        <figure className={cx('image')}>
                                            <img
                                                src="https://s240-ava-talk-zmp3.zmdcdn.me/8/2/b/c/37/240/02dde3970953983f29f49888d81d41c2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className={cx('avatar')}>
                                        <figure className={cx('image')}>
                                            <img
                                                src="https://s240-ava-talk-zmp3.zmdcdn.me/8/2/b/c/37/240/02dde3970953983f29f49888d81d41c2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className={cx('avatar')}>
                                        <figure className={cx('image')}>
                                            <img
                                                src="https://s240-ava-talk-zmp3.zmdcdn.me/8/2/b/c/37/240/02dde3970953983f29f49888d81d41c2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className={cx('avatar')}>
                                        <figure className={cx('image')}>
                                            <img
                                                src="https://s240-ava-talk-zmp3.zmdcdn.me/8/2/b/c/37/240/02dde3970953983f29f49888d81d41c2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>

                                    <div className={cx('text-item')}>+1K</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('level-right')}>
                        <a href="#a">THAM GIA</a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className={cx('event-section')}>
            <h3 className={cx('title')}>
                <span>sự kiện</span>
            </h3>
            <div className={cx('carousel')}>{renderItem}</div>
        </div>
    );
}

export default EventSection;
