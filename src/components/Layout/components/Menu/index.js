import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import React from 'react';
import styled from 'styled-components';

const cx = classNames.bind(styles);
const PseudoIcon = styled.i`
    &:before {
        content: '${(item) => item.pseudoIcon}';
    }
`;

function Menu({ props }) {
    const renderItems = props.map((item) => {
        return (
            <li key={item.id} className={cx(item.line ? 'line-separator' : 'item')}>
                <button className={cx('btn', 'menu-btn')}>
                    {item.prefixIcon.type === 'pseudo' ? (
                        <PseudoIcon
                            pseudoIcon={item.prefixIcon.icon}
                            className={cx('icon', 'prefix-icon')}
                        ></PseudoIcon>
                    ) : (
                        <i className={cx('icon', 'prefix-icon')}>{item.prefixIcon.icon ? item.prefixIcon.icon : ''}</i>
                    )}
                    <span className={cx('item-title')}>{item.title}</span>
                    {item.postfixIcon.type === 'pseudo' ? (
                        <PseudoIcon
                            pseudoIcon={item.postfixIcon.icon}
                            className={cx('icon', 'postfix-icon')}
                        ></PseudoIcon>
                    ) : (
                        <i className={cx('icon', 'postfix-icon')}>
                            {item.postfixIcon.icon ? item.postfixIcon.icon : ''}
                        </i>
                    )}
                </button>
            </li>
        );
    });

    return (
        <div className={cx('menu')}>
            <ul className={cx('menu-items')}>{renderItems}</ul>
        </div>
    );
}

export default Menu;
