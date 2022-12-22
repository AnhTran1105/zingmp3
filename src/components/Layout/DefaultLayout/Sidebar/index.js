import classNames from 'classnames/bind';
import {
    ColorLibraryIcon,
    ColorPlaylistIcon,
    ColorRecentIcon,
    LiveIcon,
    MenuIcon,
    MvIcon,
    NewsFeedIcon,
    NoteIcon,
    PlateChartIcon,
    PlateIcon,
    PlateNoteIcon,
    PlaylistIcon,
    StarIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <div className={cx('logo')}></div>
            </div>

            <Menu>
                <MenuItem
                    title="Cá Nhân"
                    to={config.routes.personal}
                    icon1={<PlaylistIcon />}
                    endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                ></MenuItem>
                <MenuItem
                    title="Khám Phá"
                    to={config.routes.discovery}
                    icon1={<PlateIcon />}
                    endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                ></MenuItem>
                <MenuItem
                    title="#zingchart"
                    to={config.routes.chart}
                    icon1={<PlateChartIcon />}
                    endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                ></MenuItem>
                <MenuItem
                    title="Radio"
                    to={config.routes.radio}
                    icon1={<PlateNoteIcon />}
                    icon2={<LiveIcon />}
                    endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                ></MenuItem>
                <MenuItem
                    title="Theo Dõi"
                    to={config.routes.following}
                    icon1={<NewsFeedIcon />}
                    endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                ></MenuItem>
            </Menu>

            <div className={cx('sidebar-divide')}></div>

            <div className={cx('menu-scrollbar')}>
                <Menu>
                    <MenuItem
                        title="Nhạc Mới"
                        to={config.routes.newSong}
                        icon1={<NoteIcon />}
                        endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                    ></MenuItem>
                    <MenuItem
                        title="Thể Loại"
                        to={config.routes.genres}
                        icon1={<MenuIcon />}
                        endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                    ></MenuItem>
                    <MenuItem
                        title="Top 100"
                        to={config.routes.top}
                        icon1={<StarIcon />}
                        endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                    ></MenuItem>
                    <MenuItem
                        title="MV"
                        to={config.routes.mv}
                        icon1={<MvIcon />}
                        endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                    ></MenuItem>
                </Menu>

                <div className={cx('sidebar-divide')}></div>

                <div className={cx('menu-library')}>
                    <div className={cx('menu-title')}>
                        <p>THƯ VIỆN</p>
                        <div className={cx('icon')}>
                            <span className={cx('title-icon')}>
                                <FontAwesomeIcon icon={faPen} />
                            </span>
                        </div>
                    </div>

                    <Menu>
                        <MenuItem
                            fontWeight={400}
                            title="Bài hát"
                            to={config.routes.newSong}
                            icon1={<ColorLibraryIcon />}
                            endIcon={<FontAwesomeIcon icon={faCirclePlay} />}
                        ></MenuItem>
                        <MenuItem
                            fontWeight={400}
                            title="Playlist"
                            to={config.routes.genres}
                            icon1={<ColorPlaylistIcon />}
                        ></MenuItem>
                        <MenuItem
                            fontWeight={400}
                            title="Gần đây"
                            to={config.routes.top}
                            icon1={<ColorRecentIcon />}
                        ></MenuItem>
                    </Menu>
                </div>
                <Menu>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 1"
                        to={config.routes.newSong}
                        endIcon={<FontAwesomeIcon className={cx('icon')} icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 2"
                        to={config.routes.genres}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 3"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 4"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 5"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 6"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 7"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 8"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 9"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                    <MenuItem
                        fontWeight={400}
                        title="Playlist 10"
                        to={config.routes.top}
                        endIcon={<FontAwesomeIcon icon={faEllipsis} />}
                    ></MenuItem>
                </Menu>
            </div>

            <div className={cx('create-playlist')}>
                <i>
                    <FontAwesomeIcon icon={faPlus} />
                </i>
                <span>Tạo Playlist mới</span>
            </div>
        </div>
    );
}

export default Sidebar;
