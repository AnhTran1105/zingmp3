import classNames from 'classnames/bind';
import NewReleaseSection from '~/components/Layout/components/NewReleaseSection';
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
                            artists: ['Hoàng Thùy Linh', 'Văn Mai Hương', 'AMEE'],
                        },
                        {
                            id: 1,
                            title: '10 Nghệ Sĩ Xuất Sắc 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/e/3/bfe38a668289c6fac1b6659457a3ad49.jpg',
                            artists: ['Hoàng Thùy Linh', 'Văn Mai Hương', 'AMEE'],
                        },
                        {
                            id: 2,
                            title: 'Nghệ Sĩ Mới Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg',
                            artists: ['Hoàng Thùy Linh', 'Văn Mai Hương', 'AMEE'],
                        },
                        {
                            id: 3,
                            title: 'V-Pop Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg',
                            artists: ['Hoàng Thùy Linh', 'Văn Mai Hương', 'AMEE'],
                        },
                        {
                            id: 4,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: ['Hoàng Thùy Linh', 'Văn Mai Hương', 'AMEE'],
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'Gần đây'}
                    moreBtn={true}
                    props={[
                        {
                            id: 0,
                            title: 'Lạc Vào Những Nỗi Buồn',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/3/c/e/d3ce99886007a0ab79c3329d62d74d2e.jpg',
                        },
                        {
                            id: 1,
                            title: 'Dance Việt Ngày Nay',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/e/f/c/defc6ce2a1875f542861bef47b805d53.jpg',
                        },
                        {
                            id: 2,
                            title: 'Sài Gòn, Acoustic Và Mưa',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/1/d/3/b1d37b1fe25d5147054d2efb152b9b8f.jpg',
                        },
                        {
                            id: 3,
                            title: 'Pop Ballad Việt Nổi Bật',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/d/1/d/7d1dfc74ee2118232101a722da9e2b23.jpg',
                        },
                        {
                            id: 4,
                            title: 'Đỉnh Cao Trending',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/c/8/fac821fa8ed28fd8b048d28819760dd4.jpg',
                        },
                        {
                            id: 5,
                            title: 'Chạm x Pháo',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/7/f/397f0c06fdf4dc457854c61e6adbe502.jpg',
                        },
                        {
                            id: 6,
                            title: 'Top 100 Nhạc Trẻ',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/8/5/2/d852eba51a52ebbbe73359ae387f4345.jpg',
                        },
                    ]}
                />
                <PlaylistSection
                    forFan={{
                        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/8/9/1/4891c7eef87e3ac85a50a2fba2674f5a.jpg',
                        name: 'Binz',
                    }}
                    props={[
                        {
                            id: 0,
                            title: '10 Nghệ Sĩ Xuất Sắc 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/1/b/3/7/1b370c7ce74d7ec4bd919d544c9d7f7b.jpg',
                            artists: ['Binz'],
                        },
                        {
                            id: 1,
                            title: '10 Nghệ Sĩ Xuất Sắc 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/2/5/1525832e532dbb8055e9ec023d5318d7.jpg',
                            artists: ['Binz', 'Rhymastic', '16 Typh'],
                        },
                        {
                            id: 2,
                            title: 'Nghệ Sĩ Mới Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/4/6/46252d6122b4b7615851ae9700d8f160_1386508433.jpg',
                            artists: ['Justatee', 'Binz'],
                        },
                        {
                            id: 3,
                            title: 'V-Pop Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/7/2/b/072ba9ae04687203d6f6af8e526ce631.jpg',
                            artists: ['Binz'],
                        },
                        {
                            id: 4,
                            title: 'US-UK Nổi Bật 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/5/b/5b0e1e9f8bc5a40c9062cc20ef85929d_1441510933.jpg',
                            artists: ['Lynk Lee', 'Binz'],
                        },
                    ]}
                />
                <NewReleaseSection
                    props={[
                        {
                            id: 0,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/e/c/a/2eca319500a855ec6ee0a5e572e90e45.jpg',
                            songName: 'How Does It Feel',
                            artists: ['Chloe', 'Chris Brown'],
                            timeRelease: 'Hôm nay',
                        },
                        {
                            id: 1,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/c/9/8/5c9860ad8fd3bc1e7d739e301cf96f25.jpg',
                            songName: 'Ngày Mai Em Đi Mất (Duet Version)',
                            artists: ['Khải Đăng', 'Đạt G'],
                            timeRelease: '1 tuần trước',
                        },
                        {
                            id: 2,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/f/2/5/df251e59edff4c80cbd05a8807add66a.jpg',
                            songName: 'Nights Into Days (Prod. by Naul)',
                            artists: ['TAEYEON'],
                            timeRelease: '3 tuần trước',
                        },
                        {
                            id: 3,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/3/a/f/c3af6936c6f85f5bb18a789130a43644.jpg',
                            songName: 'Sai Vì Tin Anh',
                            artists: ['Lương Bích Hữu'],
                            timeRelease: '1 tuần trước',
                        },
                        {
                            id: 4,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/3/d/c/33dc58b5f509fb6a2d5cc88ae8c9f6a2.jpg',
                            songName: 'Like This Like That',
                            artists: ['Tóc Tiên', 'tlinh'],
                            timeRelease: '5 ngày trước',
                        },
                        {
                            id: 5,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/2/5/e/e25e65ba4dad57c784bf8ccfbfa02e5d.jpg',
                            songName: 'DANCING ALL ALONE',
                            artists: ['Clinton Kane'],
                            timeRelease: '1 tuần trước',
                        },

                        {
                            id: 6,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/a/1/d/ba1dc4f790dedb967a397abff94ebc8f.jpg',
                            songName: 'Người Rất Tốt Không Gặp Sẽ Tốt Hơn',
                            artists: ['Hiền Hồ'],
                            timeRelease: 'Hôm qua',
                        },
                        {
                            id: 7,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/8/c/b/28cbfceedaa42408d270ab7cada85398.jpg',
                            songName: 'Mỗi Khi Anh Nhìn Em - A COLORS SHOW',
                            artists: ['Mỹ Anh'],
                            timeRelease: '2 tuần trước',
                        },
                        {
                            id: 8,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/5/e/5/35e597eea08f582e9141dbdbcfd2714d.jpg',
                            songName: 'Con Chưa Kịp Nói',
                            artists: ['Hoài Lâm'],
                            timeRelease: '3 tuần trước',
                        },
                        {
                            id: 9,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/3/b/7/53b7226db954f51f9e086835054af7a7.jpg',
                            songName: 'We Go Down Together',
                            artists: ['Dove Cameron', 'Khalid'],
                            timeRelease: '2 tuần trước',
                        },
                        {
                            id: 10,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/4/c/e/b4ce38ecd12a39e9b3fc189ee62fad06.jpg',
                            songName: 'Yesterday',
                            artists: ['Jay Park'],
                            timeRelease: '1 tuần trước',
                        },
                        {
                            id: 11,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/0/c/9/40c979fecdbde04e31d072292f2ca5b2.jpg',
                            songName: '11:11',
                            artists: ['MiiNa', 'RIN9', 'DREAMeR'],
                            timeRelease: '2 ngày trước',
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default Discovery;
