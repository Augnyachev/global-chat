import b from 'b_';
import React from 'react';

import Text from '../../text/text';

import './user-card__stats.scss';

interface UserCardStatsProps {
    messagesAmount: number;
    mostActiveChannel: string;
}

const UserCardStats = ({ messagesAmount, mostActiveChannel }: UserCardStatsProps) => {
    const valueClassName = b('user-card', 'content_user-stats_value');

    return (
        <ul className={b('user-card', 'content_user-stats')}>
            <Text id="chat.userCard.totalCount" tag={Text.TAG.LI} weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{messagesAmount}</span>
            </Text>
            <Text id="chat.userCard.mostSentMessages" tag={Text.TAG.LI}  weight={Text.WEIGHT.M}>
                : <span className={valueClassName}>{mostActiveChannel}</span>
            </Text>
        </ul>
    );
};

export default UserCardStats;
