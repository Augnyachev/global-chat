import b from 'b_';
import React from 'react';
import { Link } from 'react-router-dom';

import { DESK_CARD_TYPE } from '../constants';
import { IconChart, IconDonate, IconMessageText } from '../icon/icon';

import DeskCardDense from './__dense/desk-card__dense';

import './desk-card.scss';

interface DeskCardProps {
    type: DESK_CARD_TYPE;
}

const DeskCard = ({ type }: DeskCardProps) => {
    switch (type) {
        case DESK_CARD_TYPE.OVERALL:
            return (
                <Link to="/overall-stats">
                    <DeskCardDense icon={<IconChart />} id="desk-card.overallStats" />
                </Link>
            );
        case DESK_CARD_TYPE.DONATION:
            return (
                <a href="https://boosty.to/holypower77" target="_blank">
                    <DeskCardDense
                        icon={<IconDonate />}
                        id="desk-card.donation"
                        mix={b('desk-card', 'donation')}
                    />
                </a>
            );
        default:
            return (
                <Link to="/live-chat">
                    <DeskCardDense icon={<IconMessageText />} id="desk-card.live-chat" />
                </Link>
            );
    }
};

DeskCard.TYPE = DESK_CARD_TYPE;

export default DeskCard;
export { default as DeskCardStats } from './__stats/desk-card__stats';
export { default as DeskCardUser } from './__user/desk-card__user';
