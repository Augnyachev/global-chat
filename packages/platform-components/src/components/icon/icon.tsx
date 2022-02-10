import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';

import './icon.scss';

interface IconProps {
    ico: string
    hidden?: boolean;
    mix?: string;
    mods?: Record<string, unknown>;
    theme?: string;
    children?: ReactNode | Array<ReactNode>;
}

const Icon = ({ hidden, ico, mix, mods={}, theme, children, ...props }: IconProps) => {
    const className = b('icon', ico, { hidden, theme, ...mods });

    return (
        <i className={cx('icon', className, mix)} {...props}>
            {children}
        </i>
    );
};

export default Icon;
export { default as IconArrow } from './__arrow/icon__arrow';
export { default as IconUser } from './__user/icon__user';
export { default as IconEz } from './__ez/icon__ez';
export { default as IconTwitch } from './__twitch/icon__twitch';
export { default as IconSearch } from './__search/icon__search';
