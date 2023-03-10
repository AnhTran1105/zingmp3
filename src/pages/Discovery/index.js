import classNames from 'classnames/bind';
import EventSection from '~/components/Layout/components/EventSection';
import NewReleaseSection from '~/components/Layout/components/NewReleaseSection';
import NewSongSection from '~/components/Layout/components/NewSongSection';
import PartnerSection from '~/components/Layout/components/PartnerSection';
import LiveStreamSection from '~/components/Layout/components/LiveStreamSection';
import PlaylistSection from '~/components/Layout/components/PlaylistSection';
import GallerySection from '~/components/Layout/components/GallerySection';
import styles from './Discovery.module.scss';
import HomeChartSection from '~/components/Layout/components/HomeChartSection';
import WeekChartSection from '~/components/Layout/components/WeekChartSection';
import ArtistsSection from '~/components/Layout/components/ArtistsSection';

const cx = classNames.bind(styles);

function Discovery() {
    return (
        <div className={cx('main-page')}>
            <div className={cx('content')}>
                <GallerySection
                    props={[
                        {
                            id: 0,
                            img: 'https://photo-zmp3.zmdcdn.me/banner/6/1/7/f/617fea08d0f58f46df9a54361252f061.jpg',
                        },
                        {
                            id: 1,
                            img: 'https://photo-zmp3.zmdcdn.me/banner/2/e/9/f/2e9f2a22bcaa9a69a1ff4ef59294dbfd.jpg',
                        },
                        {
                            id: 2,
                            img: 'https://photo-zmp3.zmdcdn.me/banner/7/b/1/1/7b11b2f20518c3cb83a040e3a4001681.jpg',
                        },
                        {
                            id: 3,
                            img: 'https://photo-zmp3.zmdcdn.me/banner/d/3/6/f/d36f4338842a108aa23e6edef3db1de7.jpg',
                        },
                        {
                            id: 4,
                            img: 'https://photo-zmp3.zmdcdn.me/banner/d/7/e/7/d7e7bbef348f8f48d4fcc486599decbc.jpg',
                        },
                        {
                            id: 5,
                            img: 'https://photo-zmp3.zmdcdn.me/banner/b/8/8/b/b88b2e1141ec5818e61e974747fc36ad.jpg',
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'G???n ????y'}
                    moreBtn={true}
                    props={[
                        {
                            id: 0,
                            title: 'L???c V??o Nh???ng N???i Bu???n',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/3/c/e/d3ce99886007a0ab79c3329d62d74d2e.jpg',
                        },
                        {
                            id: 1,
                            title: 'Dance Vi???t Ng??y Nay',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/e/f/c/defc6ce2a1875f542861bef47b805d53.jpg',
                        },
                        {
                            id: 2,
                            title: 'S??i G??n, Acoustic V?? M??a',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/1/d/3/b1d37b1fe25d5147054d2efb152b9b8f.jpg',
                        },
                        {
                            id: 3,
                            title: 'Pop Ballad Vi???t N???i B???t',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/d/1/d/7d1dfc74ee2118232101a722da9e2b23.jpg',
                        },
                        {
                            id: 4,
                            title: '?????nh Cao Trending',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/c/8/fac821fa8ed28fd8b048d28819760dd4.jpg',
                        },
                        {
                            id: 5,
                            title: 'Ch???m x Ph??o',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/7/f/397f0c06fdf4dc457854c61e6adbe502.jpg',
                        },
                        {
                            id: 6,
                            title: 'Top 100 Nh???c Tr???',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/8/5/2/d852eba51a52ebbbe73359ae387f4345.jpg',
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'Nh???c Hay Ho C???a 2022 ???'}
                    props={[
                        {
                            id: 0,
                            title: '10 Ngh??? S?? Xu???t S???c 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/a/d/0/bad05d20e4d804ec53592da82b73f8d6.jpg',
                            artists: ['Ho??ng Th??y Linh', 'V??n Mai H????ng', 'AMEE'],
                        },
                        {
                            id: 1,
                            title: '10 Ngh??? S?? Xu???t S???c 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/e/3/bfe38a668289c6fac1b6659457a3ad49.jpg',
                            artists: ['Ho??ng Th??y Linh', 'V??n Mai H????ng', 'AMEE'],
                        },
                        {
                            id: 2,
                            title: 'Ngh??? S?? M???i N???i B???t 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg',
                            artists: ['Ho??ng Th??y Linh', 'V??n Mai H????ng', 'AMEE'],
                        },
                        {
                            id: 3,
                            title: 'V-Pop N???i B???t 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg',
                            artists: ['Ho??ng Th??y Linh', 'V??n Mai H????ng', 'AMEE'],
                        },
                        {
                            id: 4,
                            title: 'US-UK N???i B???t 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                            artists: ['Ho??ng Th??y Linh', 'V??n Mai H????ng', 'AMEE'],
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'N??? ngh??? s?? n???i b???t ????'}
                    props={[
                        {
                            id: 0,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/b/d/a2bdbad3b7acf3b92b0e29d30903f51e.jpg',
                            des: "'See T??nh' v?? series Hit t???o n??n th????ng hi???u",
                        },
                        {
                            id: 1,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/b/0/4/c/b04c5a560ddbade0b9af9e36b165907e.jpg',
                            des: "Thay m???i ch??ng trai... 'Shay n???ng' nh???c c???a AMEE",
                        },
                        {
                            id: 2,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/c/0/7/dc07e6eb440a6382795c661c29c4694c.jpg',
                            des: "'Gh??? y??u d???u c???a tlinh ??i', nghe tlinh h??t ?? k?? hem?",
                        },
                        {
                            id: 3,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/3/a/3/f/3a3ff40d09e96410b3f97b2cd1b031fb.jpg',
                            des: 'V????n ra th??? gi???i c??ng ??m nh???c c???a M??? Anh',
                        },
                        {
                            id: 4,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/4/7/fa4793406039b9da839ab21ee43b517c.jpg',
                            des: "'B???t t??nh y??u l??n' c??ng nh???c c???a H??a Minzy",
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'D??nh cho fan'}
                    forFan={{
                        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/8/9/1/4891c7eef87e3ac85a50a2fba2674f5a.jpg',
                        name: 'Binz',
                    }}
                    props={[
                        {
                            id: 0,
                            title: '10 Ngh??? S?? Xu???t S???c 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/1/b/3/7/1b370c7ce74d7ec4bd919d544c9d7f7b.jpg',
                            artists: ['Binz'],
                        },
                        {
                            id: 1,
                            title: '10 Ngh??? S?? Xu???t S???c 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/2/5/1525832e532dbb8055e9ec023d5318d7.jpg',
                            artists: ['Binz', 'Rhymastic', '16 Typh'],
                        },
                        {
                            id: 2,
                            title: 'Ngh??? S?? M???i N???i B???t 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/4/6/46252d6122b4b7615851ae9700d8f160_1386508433.jpg',
                            artists: ['Justatee', 'Binz'],
                        },
                        {
                            id: 3,
                            title: 'V-Pop N???i B???t 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/7/2/b/072ba9ae04687203d6f6af8e526ce631.jpg',
                            artists: ['Binz'],
                        },
                        {
                            id: 4,
                            title: 'US-UK N???i B???t 2022',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/5/b/5b0e1e9f8bc5a40c9062cc20ef85929d_1441510933.jpg',
                            artists: ['Lynk Lee', 'Binz'],
                        },
                    ]}
                />
                <LiveStreamSection
                    props={[
                        {
                            id: 0,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/9/8/a/f98a72ba5fd2f10b47250eb5e720aa3c.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg',
                            title: 'XONE Radio',
                            subtitle: '143 ??ang nghe',
                        },
                        {
                            id: 1,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg',
                            title: 'V-POP',
                            subtitle: '936 ??ang nghe',
                        },
                        {
                            id: 2,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/8/0/3/6803b42e5444830b57a02d3f4d427301.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg',
                            title: 'Pladio',
                            subtitle: '98 ??ang nghe',
                        },
                        {
                            id: 3,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg',
                            title: 'Ch???m',
                            subtitle: '248 ??ang nghe',
                        },
                        {
                            id: 4,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/c/f/9/6cf9a7732fa9f32e0ff8161c20e49f54.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg',
                            title: 'On Air',
                            subtitle: '53 ??ang nghe',
                        },
                        {
                            id: 5,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg',
                            title: 'Bolero',
                            subtitle: '434 ??ang nghe',
                        },
                        {
                            id: 6,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg',
                            title: 'US-UK',
                            subtitle: '152 ??ang nghe',
                        },
                        {
                            id: 7,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg',
                            title: 'K-POP',
                            subtitle: '123 ??ang nghe',
                        },
                        {
                            id: 8,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/9/9/3/0993b3110c60ba6518fceeba9913d20d.jpg',
                            title: 'Acoustic',
                            subtitle: '518 ??ang nghe',
                        },
                        {
                            id: 9,
                            cardImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/2/2/bf223818f85e7fe129091b415038ca6c.jpg',
                            hostImg:
                                'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg',
                            title: 'Rap Vi???t',
                            subtitle: '132 ??ang nghe',
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'Nh???c m???i m???i ng??y'}
                    props={[
                        {
                            id: 0,
                            title: 'V-Pop Th??ng 3/2023',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/4/8/8/5488c2adbd0c2415102bd52d26030482.jpg',
                            artists: ['H??a Minzy', 'Hi???n H???', 'Miina'],
                        },
                        {
                            id: 1,
                            title: 'US-UK Th??ng 3/2023',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/7/4/d/774da9673bc6e61614f3fd8273fb6236.jpg',
                            artists: ['P!nk', 'Clinton Kane', 'The Weeknd'],
                        },
                        {
                            id: 2,
                            title: 'K-Pop Th??ng 3/2023',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/e/5/66e575133b731456bd51bc689aa58b33.jpg',
                            artists: ['STAYC', 'XG', 'PURPLE KISS'],
                        },
                        {
                            id: 3,
                            title: 'C-Pop Th??ng 3/2023',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/1/8/5/01850f1ab036f1040bab4072320cbe0e.jpg',
                            artists: ['Yisa Yu', '????????? JJ Lin', 'Lay'],
                        },
                        {
                            id: 4,
                            title: 'Indie Vi???t Th??ng 3/2023',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/3/3/7633dfdba7afd8bee61731fd453facc5.jpg',
                            artists: ['SIVAN', 'Pixel Neko', 'T.R.I'],
                        },
                    ]}
                />
                <HomeChartSection
                    props={[
                        {
                            order: 1,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/a/d/4/4ad439b918f3356addb5f237c1380ffc.jpg',
                            songName: 'Em L?? K??? ????ng Th????ng',
                            artists: ['Ph??t Huy T4'],
                            percentage: '40%',
                        },
                        {
                            order: 2,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/e/3/4/ce34451501c9e64070402a50f7660c07.jpg',
                            songName: 'Ngo??i 30',
                            artists: ['Th??i H???c'],
                            percentage: '33%',
                        },
                        {
                            order: 3,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/d/5/c/2d5cc8bc9f930ce292c464e929ea31fb.jpg',
                            songName: 'B???t T??nh Y??u L??n',
                            artists: ['T??ng Duy T??n', 'H??a Minzy'],
                            percentage: '25%',
                        },
                    ]}
                />

                <WeekChartSection
                    props={[
                        { id: 0, img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg' },
                        { id: 1, img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg' },
                        { id: 2, img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg' },
                    ]}
                />
                <ArtistsSection
                    props={[
                        {
                            id: 0,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png',
                        },
                        {
                            id: 1,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png',
                        },
                        {
                            id: 2,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png',
                        },
                        {
                            id: 3,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png',
                        },
                        {
                            id: 4,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png',
                        },
                        {
                            id: 5,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png',
                        },
                        {
                            id: 6,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png',
                        },
                        {
                            id: 7,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png',
                        },
                        {
                            id: 8,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png',
                        },
                        {
                            id: 9,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png',
                        },
                        {
                            id: 10,
                            img: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png',
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
                            timeRelease: 'H??m nay',
                        },
                        {
                            id: 1,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/c/9/8/5c9860ad8fd3bc1e7d739e301cf96f25.jpg',
                            songName: 'Ng??y Mai Em ??i M???t (Duet Version)',
                            artists: ['Kh???i ????ng', '?????t G'],
                            timeRelease: '1 tu???n tr?????c',
                        },
                        {
                            id: 2,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/d/f/2/5/df251e59edff4c80cbd05a8807add66a.jpg',
                            songName: 'Nights Into Days (Prod. by Naul)',
                            artists: ['TAEYEON'],
                            timeRelease: '3 tu???n tr?????c',
                        },
                        {
                            id: 3,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/3/a/f/c3af6936c6f85f5bb18a789130a43644.jpg',
                            songName: 'Sai V?? Tin Anh',
                            artists: ['L????ng B??ch H???u'],
                            timeRelease: '1 tu???n tr?????c',
                        },
                        {
                            id: 4,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/3/d/c/33dc58b5f509fb6a2d5cc88ae8c9f6a2.jpg',
                            songName: 'Like This Like That',
                            artists: ['T??c Ti??n', 'tlinh'],
                            timeRelease: '5 ng??y tr?????c',
                        },
                        {
                            id: 5,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/2/5/e/e25e65ba4dad57c784bf8ccfbfa02e5d.jpg',
                            songName: 'DANCING ALL ALONE',
                            artists: ['Clinton Kane'],
                            timeRelease: '1 tu???n tr?????c',
                        },

                        {
                            id: 6,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/a/1/d/ba1dc4f790dedb967a397abff94ebc8f.jpg',
                            songName: 'Ng?????i R???t T???t Kh??ng G???p S??? T???t H??n',
                            artists: ['Hi???n H???'],
                            timeRelease: 'H??m qua',
                        },
                        {
                            id: 7,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/8/c/b/28cbfceedaa42408d270ab7cada85398.jpg',
                            songName: 'M???i Khi Anh Nh??n Em - A COLORS SHOW',
                            artists: ['M??? Anh'],
                            timeRelease: '2 tu???n tr?????c',
                        },
                        {
                            id: 8,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/3/5/e/5/35e597eea08f582e9141dbdbcfd2714d.jpg',
                            songName: 'Con Ch??a K???p N??i',
                            artists: ['Ho??i L??m'],
                            timeRelease: '3 tu???n tr?????c',
                        },
                        {
                            id: 9,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/3/b/7/53b7226db954f51f9e086835054af7a7.jpg',
                            songName: 'We Go Down Together',
                            artists: ['Dove Cameron', 'Khalid'],
                            timeRelease: '2 tu???n tr?????c',
                        },
                        {
                            id: 10,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/4/c/e/b4ce38ecd12a39e9b3fc189ee62fad06.jpg',
                            songName: 'Yesterday',
                            artists: ['Jay Park'],
                            timeRelease: '1 tu???n tr?????c',
                        },
                        {
                            id: 11,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/0/c/9/40c979fecdbde04e31d072292f2ca5b2.jpg',
                            songName: '11:11',
                            artists: ['MiiNa', 'RIN9', 'DREAMeR'],
                            timeRelease: '2 ng??y tr?????c',
                        },
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'V?? B???N QUAN T??M'}
                    forFan={{
                        img: 'https://photo-zmp3.zmdcdn.me/cover/a/5/4/4/a54405ab40d843bc73366684a74203b4.jpg',
                        name: 'R&B',
                    }}
                    props={[
                        {
                            id: 0,
                            title: 'Are & Be',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/6/9/2/e6920ea52a04d228cc65e95ad77d0994.jpg',
                            artists: ['Beyonc??', 'SZA', 'Lucky Daye'],
                        },
                        {
                            id: 1,
                            title: 'WE ARE',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/8/a/c/58ac088ca91326607f2cb1ccef1dd1b4.jpg',
                            artists: ['John Batiste'],
                        },
                        {
                            id: 2,
                            title: 'Urban Hits',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/8/8/a/088a63ee5c892edda58a2ce671318b8d.jpg',
                            artists: ['Beyonc??', 'Chris Brown', 'Chloe'],
                        },
                        {
                            id: 3,
                            title: 'Women of R&B',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/a/a/84aa98b72b1f58f81ce7578cb0f2f792.jpg',
                            artists: ['Alicia Keys', 'Beyonc??', 'SZA'],
                        },
                        {
                            id: 4,
                            title: '?????nh cao R&B',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/4/0/ab404a3bcdafa17d525140c153de5fbb.jpg',
                            artists: ['Alicia Keys', 'Usher', 'Chris Brown'],
                        },
                    ]}
                />
                <NewSongSection
                    props={[
                        {
                            id: 0,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/a/6/f/7a6f65300b3d82b17a023a05e42ea6c1.jpg',
                            songName: 'B???ng B???nh B???ng B???nh',
                            artists: ['Nam Em'],
                            timeRelease: '22.02.2023',
                            order: '1',
                        },
                        {
                            id: 1,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/0/c/9/40c979fecdbde04e31d072292f2ca5b2.jpg',
                            songName: '11:11',
                            artists: ['MiiNa', 'RIN9', 'DREAMeR'],
                            timeRelease: '22.02.2023',
                            order: '2',
                        },
                        {
                            id: 2,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/9/c/fa9c4dc780fcdcf17e35374b9e4be2fc.jpg',
                            songName: 'Ng?????i R???t T???t Kh??ng G???p S??? T???t H??n',
                            artists: ['Hi???n H???'],
                            timeRelease: '23.02.2023',
                            order: '3',
                        },
                    ]}
                />
                <PlaylistSection
                    props={[
                        {
                            id: 0,
                            title: 'B?? M???t Nh??? (Single)',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/9/e/ad9e3e8052719bf8bd36ff78ce7bb84c.jpg',
                            artists: ['B Ray', 'Helia', 'Ho??ng T??n'],
                        },
                        {
                            id: 1,
                            title: 'Sau N??y N???u C?? Th????ng Em',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/1/9/a/f19ad7841238e403df36cc7a9c536837.jpg',
                            artists: ['H????ng Ly', 'LY.M'],
                        },
                        {
                            id: 2,
                            title: 'Ng?????i R???t T???t Kh??ng G???p S??? T???t H??n',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/9/c/fa9c4dc780fcdcf17e35374b9e4be2fc.jpg',
                            artists: ['Hi???n H???'],
                        },
                        {
                            id: 3,
                            title: 'C??y ??a Qu??n D???c',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/d/0/9/bd09cdcd85cec5eba537ac2862c192c3.jpg',
                            artists: ['LEO'],
                        },
                        {
                            id: 4,
                            title: 'B???t T??nh Y??u L??n',
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/d/5/c/2d5cc8bc9f930ce292c464e929ea31fb.jpg',
                            artists: ['T??ng Duy T??n', 'H??a Minzy'],
                        },
                    ]}
                />
                <EventSection
                    props={[
                        {
                            id: 0,
                            img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r12x7_webp/event/6/2/e/d/62edf7eebd38da2e99397514179eb06a.jpg',
                        },
                    ]}
                />
                <PartnerSection
                    props={[
                        { id: 0, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png' },
                        { id: 1, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/taihe.png' },
                        {
                            id: 2,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png',
                        },
                        { id: 3, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png' },
                        { id: 4, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/hikoon.png' },
                        {
                            id: 5,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png',
                        },
                        {
                            id: 6,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png',
                        },
                        { id: 7, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/kakao.png' },
                        { id: 8, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png' },
                        { id: 9, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/jsj.png' },
                        {
                            id: 10,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png',
                        },
                        {
                            id: 11,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png',
                        },
                        { id: 12, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png' },
                        {
                            id: 13,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/stone-music.png',
                        },
                        { id: 14, img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png' },
                        {
                            id: 15,
                            img: 'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png',
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default Discovery;
