import classNames from 'classnames/bind';
import styles from './SubMenu.module.scss';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

const cx = styles.bind(styles);
const PseudoIcon = styled.i`
    &:before {
        content: '${(item) => item.pseudoIcon}';
    }
`;

function SubMenu({ props }) {
    const [visible, setVisible] = useState(true);
    return props.map((item) => (
        <div key={item.id}>
            <Tippy
                visible={visible}
                interactive
                render={(attrs) => (
                    <div className={cx('menu', 'sub-menu')} {...attrs}>
                        <ul className={cx('menu-items')}>
                            {item.subMenu.map((subItem) => {
                                return (
                                    <li key={subItem.id} className={cx(subItem.line ? 'line-separator' : 'item')}>
                                        <button className={cx('btn', 'menu-btn')} style={subItem.style}>
                                            {/* {typeof subItem.prefixIcon === 'string' ? (
                                            <PseudoIcon
                                                pseudoIcon={subItem.prefixIcon}
                                                className={cx('icon', 'prefix-icon')}
                                            ></PseudoIcon>
                                        ) : (
                                            <i className={cx('icon', 'prefix-icon')}>
                                                {subItem.prefixIcon ? subItem.prefixIcon : ''}
                                            </i>
                                        )} */}
                                            <span className={cx('item-title')}>{subItem.title}</span>
                                            {typeof subItem.postfixIcon === 'string' ? (
                                                <PseudoIcon
                                                    pseudoIcon={subItem.postfixIcon}
                                                    className={cx('icon', 'postfix-icon')}
                                                ></PseudoIcon>
                                            ) : (
                                                <i className={cx('icon', 'postfix-icon')}>
                                                    {subItem.postfixIcon ? subItem.postfixIcon : ''}
                                                </i>
                                            )}
                                        </button>
                                        {subItem.content ? subItem.content : ''}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            >
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
            </Tippy>
        </div>
    ));
}

export default SubMenu;
