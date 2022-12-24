/* eslint-disable react/no-multi-comp */
import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import { disableControls, sizeProps } from '../../../stories/__helpers__';
import { Spacer, StoryOverview } from '../../containers/stories';

import Switcher from './switcher';

export default {
    title: 'Platform Components/Common/Switcher',
    component: Switcher,
} as Meta<typeof Switcher>;

export const Overview: StoryFn<typeof Switcher> = (args) => {
    const [checked, setChecked] = useState(false);

    return (
        <StoryOverview
            componentName="Switcher"
            notOkList={[
                'Don’t use it to choose multiple options from the list of related items. Develop <Checkbox /> instead.',
            ]}
            okList={[
                'Use it to control the state of an item.',
                'Use it to turn a setting or a function on or off.',
                'Use it when change takes an instant effect.',
            ]}
            usage="Toggle Switch allow users to switch between two possible states. They are commonly used to turn a specific setting on or off."
        >
            <Switcher
                checked={checked}
                disabled={args.disabled}
                handleToggle={() => setChecked(!checked)}
                size={args.size}
            />
        </StoryOverview>
    );
};
Overview.args = {
    checked: false,
    disabled: false,
    size: Switcher.SIZE.M,
};
Overview.argTypes = {
    ...sizeProps(),
};

export const Sizes: StoryFn<typeof Switcher> = () => (
    <Spacer>
        <Spacer direction="row">
            <Switcher checked={false} size={Switcher.SIZE.L} />
            <Switcher checked={false} size={Switcher.SIZE.M} />
            <Switcher checked={false} size={Switcher.SIZE.S} />
        </Spacer>
        <Spacer direction="row">
            <Switcher checked size={Switcher.SIZE.L} />
            <Switcher checked size={Switcher.SIZE.M} />
            <Switcher checked size={Switcher.SIZE.S} />
        </Spacer>
    </Spacer>
);
Sizes.parameters = { ...disableControls() };

export const Variants: StoryFn<typeof Switcher> = () => (
    <Spacer>
        <Switcher checked={false} />
        <Switcher checked />
        <Switcher checked={false} disabled />
        <Switcher checked disabled />
    </Spacer>
);
Variants.parameters = { ...disableControls() };
