import classNames from 'classnames/bind';
// import LiveStreamSection from '~/components/Layout/components/LiveStreamSection';
import PlaylistSection from '~/components/Layout/components/PlaylistSection';
import SlideShow from '~/components/Layout/components/SlideShow';
import styles from './Discovery.module.scss';

const cx = classNames.bind(styles);

function Discovery() {
    return (
        <div className={cx('main-page')}>
            <div className={cx('content')}>
                <SlideShow />
                <PlaylistSection
                    sectionTitle={'Nhạc Hay Ho Của 2022 ⭐'}
                    props={[
                        {
                            id: 0,
                            title: '10 Nghệ Sĩ Xuất Sắc 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/a/d/0/bad05d20e4d804ec53592da82b73f8d6.jpg',
                            artists: ['Hoàng Thùy Linh', 'AMEE', 'MONO'],
                        },
                        {
                            id: 1,
                            title: '10 Nghệ Sĩ Xuất Sắc 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/e/3/bfe38a668289c6fac1b6659457a3ad49.jpg',
                            artists: 'Hoàng Thùy Linh',
                        },
                        {
                            id: 2,
                            title: 'Nghệ Sĩ Mới Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg',
                            artists: 'AMEE',
                        },
                        {
                            id: 3,
                            title: 'V-Pop Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg',
                            artists: 'AMEE',
                        },
                        {
                            id: 4,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: 'Văn Mai Hương',
                        },
                        {
                            id: 5,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: 'Văn Mai Hương',
                        },
                        {
                            id: 6,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: 'Văn Mai Hương',
                        },
                        {
                            id: 7,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: 'Văn Mai Hương',
                        },
                        {
                            id: 8,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: 'Văn Mai Hương',
                        },
                        {
                            id: 9,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: 'Văn Mai Hương',
                        },
                    ]}
                    // cardImage={[
                    //     'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/a/d/0/bad05d20e4d804ec53592da82b73f8d6.jpg',
                    //     'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/e/3/bfe38a668289c6fac1b6659457a3ad49.jpg',
                    //     'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg',
                    //     'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg',
                    //     'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                    // ]}
                    // cardTitle={[
                    //     '10 Nghệ Sĩ Xuất Sắc 2022',
                    //     '10 Nghệ Sĩ Xuất Sắc 2022',
                    //     'Nghệ Sĩ Mới Nổi Bật 2022',
                    //     'V-Pop Nổi Bật 2022',
                    //     'US-UK Nổi Bật 2022',
                    // ]}
                    // artists={[
                    //     ['Hoàng Thùy Linh', 'AMEE', 'MONO'],
                    //     ['Karik', 'Đức Phúc', 'Văn Mai Hương'],
                    //     ['MONO', 'Grey D', 'Cầm'],
                    //     ['Miu Lê', 'Karik', 'Hoàng Thùy Linh'],
                    //     ['Harry Styles', 'The Weeknd', 'Troye Sivan'],
                    // ]}
                />
            </div>
        </div>
    );
}

export default Discovery;
