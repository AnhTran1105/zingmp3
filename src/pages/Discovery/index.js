import classNames from 'classnames/bind';
import PlaylistSection from '~/components/Layout/components/PlaylistSection';
import SlideShow from '~/components/Layout/components/SlideShow';
import styles from './Discovery.module.scss';

const cx = classNames.bind(styles);

function Discovery() {
    return (
        <div>
            <SlideShow />
            <div className={cx('spacer')}></div>
            <PlaylistSection />
        </div>
    );
}

export default Discovery;
