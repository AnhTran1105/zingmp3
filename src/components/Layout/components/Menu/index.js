import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import React from 'react';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import MusicPlayer from './SubMenu/MusicPlayer/index.js';
import Interface from './SubMenu/Interface';

const cx = classNames.bind(styles);
const PseudoIcon = styled.i`
    &:before {
        content: '${(item) => item.pseudoIcon}';
    }
`;

function Menu({ props }) {
    const [visible, setVisible] = useState(false);

    const renderItems = props.map((item) => {
        if (item.musicPlayer)
            return (
                <div key={item.id} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    <Tippy visible={false} interactive render={(attrs) => <MusicPlayer {...attrs} />}>
                        <li key={item.id} className={cx(item.line ? 'line-separator' : 'item')}>
                            <button className={cx('btn', 'menu-btn')} style={item.style}>
                                {typeof item.prefixIcon === 'string' ? (
                                    <PseudoIcon
                                        pseudoIcon={item.prefixIcon}
                                        className={cx('icon', 'prefix-icon')}
                                    ></PseudoIcon>
                                ) : (
                                    <i className={cx('icon', 'prefix-icon')}>
                                        {item.prefixIcon ? item.prefixIcon : ''}
                                    </i>
                                )}
                                <span className={cx('item-title')}>{item.title}</span>
                                {typeof item.postfixIcon === 'string' ? (
                                    <PseudoIcon
                                        pseudoIcon={item.postfixIcon}
                                        className={cx('icon', 'postfix-icon')}
                                    ></PseudoIcon>
                                ) : (
                                    <i className={cx('icon', 'postfix-icon')}>
                                        {item.postfixIcon ? item.postfixIcon : ''}
                                    </i>
                                )}
                            </button>
                        </li>
                    </Tippy>
                </div>
            );
        else if (item.interface)
            return (
                <div key={item.id} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                    <Tippy visible={visible} interactive render={(attrs) => <Interface {...attrs} />}>
                        <li key={item.id} className={cx(item.line ? 'line-separator' : 'item')}>
                            <button className={cx('btn', 'menu-btn')} style={item.style}>
                                {typeof item.prefixIcon === 'string' ? (
                                    <PseudoIcon
                                        pseudoIcon={item.prefixIcon}
                                        className={cx('icon', 'prefix-icon')}
                                    ></PseudoIcon>
                                ) : (
                                    <i className={cx('icon', 'prefix-icon')}>
                                        {item.prefixIcon ? item.prefixIcon : ''}
                                    </i>
                                )}
                                <span className={cx('item-title')}>{item.title}</span>
                                {typeof item.postfixIcon === 'string' ? (
                                    <PseudoIcon
                                        pseudoIcon={item.postfixIcon}
                                        className={cx('icon', 'postfix-icon')}
                                    ></PseudoIcon>
                                ) : (
                                    <i className={cx('icon', 'postfix-icon')}>
                                        {item.postfixIcon ? item.postfixIcon : ''}
                                    </i>
                                )}
                            </button>
                        </li>
                    </Tippy>
                </div>
            );
        else
            return (
                <li key={item.id} className={cx(item.line ? 'line-separator' : 'item')}>
                    <button className={cx('btn', 'menu-btn')} style={item.style}>
                        {typeof item.prefixIcon === 'string' ? (
                            <PseudoIcon pseudoIcon={item.prefixIcon} className={cx('icon', 'prefix-icon')}></PseudoIcon>
                        ) : (
                            <i className={cx('icon', 'prefix-icon')}>{item.prefixIcon ? item.prefixIcon : ''}</i>
                        )}
                        <span className={cx('item-title')}>{item.title}</span>
                        {typeof item.postfixIcon === 'string' ? (
                            <PseudoIcon
                                pseudoIcon={item.postfixIcon}
                                className={cx('icon', 'postfix-icon')}
                            ></PseudoIcon>
                        ) : (
                            <i className={cx('icon', 'postfix-icon')}>{item.postfixIcon ? item.postfixIcon : ''}</i>
                        )}
                    </button>
                </li>
            );

        //     return item.subMenu ? (
        //         <div key={item.id} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        //             <Tippy visible={visible} interactive render={(attrs) => <SubMenu {...attrs} />}>
        //                 <li key={item.id} className={cx(item.line ? 'line-separator' : 'item')}>
        //                     <button className={cx('btn', 'menu-btn')} style={item.style}>
        //                         {typeof item.prefixIcon === 'string' ? (
        //                             <PseudoIcon
        //                                 pseudoIcon={item.prefixIcon}
        //                                 className={cx('icon', 'prefix-icon')}
        //                             ></PseudoIcon>
        //                         ) : (
        //                             <i className={cx('icon', 'prefix-icon')}>{item.prefixIcon ? item.prefixIcon : ''}</i>
        //                         )}
        //                         <span className={cx('item-title')}>{item.title}</span>
        //                         {typeof item.postfixIcon === 'string' ? (
        //                             <PseudoIcon
        //                                 pseudoIcon={item.postfixIcon}
        //                                 className={cx('icon', 'postfix-icon')}
        //                             ></PseudoIcon>
        //                         ) : (
        //                             <i className={cx('icon', 'postfix-icon')}>{item.postfixIcon ? item.postfixIcon : ''}</i>
        //                         )}
        //                     </button>
        //                 </li>
        //             </Tippy>
        //         </div>
        //     ) : (
        //         <li key={item.id} className={cx(item.line ? 'line-separator' : 'item')}>
        //             <button className={cx('btn', 'menu-btn')} style={item.style}>
        //                 {typeof item.prefixIcon === 'string' ? (
        //                     <PseudoIcon pseudoIcon={item.prefixIcon} className={cx('icon', 'prefix-icon')}></PseudoIcon>
        //                 ) : (
        //                     <i className={cx('icon', 'prefix-icon')}>{item.prefixIcon ? item.prefixIcon : ''}</i>
        //                 )}
        //                 <span className={cx('item-title')}>{item.title}</span>
        //                 {typeof item.postfixIcon === 'string' ? (
        //                     <PseudoIcon pseudoIcon={item.postfixIcon} className={cx('icon', 'postfix-icon')}></PseudoIcon>
        //                 ) : (
        //                     <i className={cx('icon', 'postfix-icon')}>{item.postfixIcon ? item.postfixIcon : ''}</i>
        //                 )}
        //             </button>
        //         </li>
        //     );
    });

    return (
        <div className={cx('menu')}>
            <ul className={cx('menu-items')}>{renderItems}</ul>
        </div>
    );
}

export default Menu;
