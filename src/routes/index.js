import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Personal from '~/pages/Personal';
import Discovery from '~/pages/Discovery';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/personal', component: Personal },
    { path: '/discovery', component: Discovery },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
