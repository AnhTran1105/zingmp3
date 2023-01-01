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
                    cardImage={[
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/a/d/0/bad05d20e4d804ec53592da82b73f8d6.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/e/3/bfe38a668289c6fac1b6659457a3ad49.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/8/4/ff849b97aec21619cb10f522a480f14c.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/8/9/0289857b5e5da497cef2cc590c713fc3.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/3/7/0/2370813dad97bdd6b94a8a90406e9c2a.jpg',
                    ]}
                    cardTitle={[
                        '10 Nghệ Sĩ Xuất Sắc 2022',
                        '10 Nghệ Sĩ Xuất Sắc 2022',
                        'Nghệ Sĩ Mới Nổi Bật 2022',
                        'V-Pop Nổi Bật 2022',
                        'US-UK Nổi Bật 2022',
                    ]}
                    artists={[
                        ['Hoàng Thùy Linh', 'AMEE', 'MONO'],
                        ['Karik', 'Đức Phúc', 'Văn Mai Hương'],
                        ['MONO', 'Grey D', 'Cầm'],
                        ['Miu Lê', 'Karik', 'Hoàng Thùy Linh'],
                        ['Harry Styles', 'The Weeknd', 'Troye Sivan'],
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'Có Thể Bạn Muốn Nghe'}
                    cardImage={[
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/5/5/4/a554f854528577dfd8915f9d770663ed.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/e/0/48e094fface684b9b93667c68b62f036.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/7/a/5/87a595febc50ecd21ef28c6941d4457a.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/1/c/7/d1c7ab65a25406ba620fc16102156bf7.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/9/f/3f9f8810dd3f650b9feb00bf470032ce.jpg',
                    ]}
                    cardTitle={[
                        'Dance Việt Hay Nhất',
                        'Reggae V',
                        'Rap Việt Cũ Mà Hay',
                        'Chill Cùng Rap Việt',
                        'Nhạc Phim Việt Nam Hay Nhất',
                    ]}
                    artists={[
                        ['Masew', 'K-ICM', 'SlimV'],
                        ['JGKiD', 'HuyR', 'Huỳnh James'],
                        ['Rhymastic', 'LK', 'Yanbi'],
                        ['WEAN', 'VSOUL', 'MCK'],
                        ['Phan Mạnh Quỳnh', 'Đức Phúc', 'Trịnh Thăng Bình'],
                    ]}
                />
                <PlaylistSection
                    sectionTitle={'Xập xình cuối năm 🔥'}
                    cardImage={[
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/1/b/d/81bd9f967b54ead63cc45041197ce232.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/d/f/e/5dfe20d4f2e32f9efc53580a8dfbe40c.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/c/1/c/2c1c93446c893655164b00933115cdf3.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/6/6/0/e6605c0092d86fb7042cf45d30ee78d0.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/d/6/9/6d696592096b533b3c7a0c3873a80e3e.jpg',
                    ]}
                    cardTitle={[
                        'Trào Lưu Nhạc Hot',
                        'Party Hits Now',
                        'Mega Hit Mix',
                        'Remix Việt Ngày Nay',
                        'Xuyên Màn Đêm',
                    ]}
                    // artists={[
                    //     ['Masew', 'K-ICM', 'SlimV'],
                    //     ['JGKiD', 'HuyR', 'Huỳnh James'],
                    //     ['Rhymastic', 'LK', 'Yanbi'],
                    //     ['WEAN', 'VSOUL', 'MCK'],
                    //     ['Phan Mạnh Quỳnh', 'Đức Phúc', 'Trịnh Thăng Bình'],
                    // ]}
                    playlistDes={[
                        'Những ca khúc tạo nên những trào lưu nóng nhất của năm 2022',
                        'Hit EDM thời thượng không thể thiếu cho buổi party cuối năm',
                        'Nhạc nào cũng nhảy với những lựa chọn sôi động nhất',
                        'Xập xình cuối năm với những bản Remix nóng nhất hiện nay',
                        'Vui vẻ cả đêm với những track Rap Việt bắt tai nhất',
                    ]}
                />
                {/* <LiveStreamSection
                    sectionTitle={'Radio Nổi bật'}
                    cardImage={[
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/d/2/c/2d2cf53040784ff520b532e37fc08d32.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/5/6/d/656da41d575f1474dbdaa51b5004a96c.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg',
                    ]}
                /> */}
                <PlaylistSection
                    sectionTitle={'Nhạc mới mỗi ngày'}
                    cardImage={[
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/1/7/c/e17c4104112a4f917c1270685720f3b3.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/d/3/0/9d303eabbed0ae3f2a2685d319d3a8ef.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/3/4/5/f3451088bb45460bc6aa8e254dcbf66f.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/2/2/f/622f1d623587f2b400da8fe506f73e72.jpg',
                        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/9/a/a/f9aa27a0914e1bef91405f8d096759fb.jpg',
                    ]}
                    cardTitle={[
                        'V-Pop Tháng 12/2022',
                        'US-UK Tháng 12/2022',
                        'K-Pop Tháng 12/2022',
                        'C-Pop Tháng 12/2022',
                        'Indie Việt Tháng 12/2022',
                    ]}
                    artists={[
                        ['Noo Phước Thịnh', 'Hứa Kim Tuyền', 'Hà Nhi'],
                        ['Troye Sivan', 'The Weeknd', 'SZA'],
                        ['Red Velvet', 'ITZY', 'Super Junior'],
                        ['Jackson Wang', 'WayV', 'Daniel Zhou'],
                        ['Changg', 'buitruonglinh', 'Thái Đinh'],
                    ]}
                />
            </div>
        </div>
    );
}

export default Discovery;
