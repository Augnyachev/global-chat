import b from 'b_';
import { UserCard, Text } from 'platform-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedChannel } from '../../../store/slices/channels';
import { getMessagesDates } from '../../../store/slices/messages';
import { updateSetting } from '../../../store/slices/settings';
import { getMostActiveChannel, getUser } from '../../../store/slices/twitch-user';

import ChatMessages from './__messages/chat__messages';

import './chat.scss';

const Chat = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const mostActiveChannel = useSelector(getMostActiveChannel);
    const messagesDates = useSelector(getMessagesDates);
    const selectedChannel = useSelector(getSelectedChannel);

    return (
        <section className="chat">
            <UserCard
                createdAt={user.createdAt}
                displayName={user.displayName}
                heatmapDates={messagesDates}
                messagesAmount={user.messagesAmount!}
                mostActiveChannel={mostActiveChannel}
                profileImageUrl={user.profileImageUrl}
                updateSettings={(key, value) => {
                    dispatch(updateSetting({ key, value }));
                }}
                userId={user.userId}
            />
            {selectedChannel && <Text id="chat.channelName" mix={b('chat', 'title')} size={Text.SIZE.XL}>
                <Text mix={b('chat', 'title-channel')} size={Text.SIZE.XL}>{selectedChannel.displayName}</Text>
            </Text>}
            <ChatMessages />
        </section >
    );
};

export default Chat;
