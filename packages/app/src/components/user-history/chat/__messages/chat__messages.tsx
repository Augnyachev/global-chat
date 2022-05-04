import b from 'b_';
import {
    useGetMessagesByUserIdAndChannelIdQuery,
    useGetSubscriberBadgesByChannelIdQuery,
} from 'platform-apis';
import { Skeleton, SNACKBAR_TYPE } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ErrorBoundary from '../../../../containers/error-boundary/error-boundary';
import { getSelectedChannel } from '../../../../store/slices/channels';
import {
    clearMessages,
    getIsMessagesFetching,
    getMessages,
    pushMessages,
    setIsMessagesFetching,
} from '../../../../store/slices/messages';
import { getSortByDateSetting } from '../../../../store/slices/settings';
import { getUserId } from '../../../../store/slices/twitch-user';
import { addNotification } from '../../../../utils';

import InifiniteScrollWrapper from './infinite-scroll-wrapper';

import './chat__messages.scss';

const ChatMessages = () => {
    const dispatch = useDispatch();

    const messages = useSelector(getMessages);
    const isMessagesFetching = useSelector(getIsMessagesFetching);
    const selectedChannel = useSelector(getSelectedChannel);
    const sort = useSelector(getSortByDateSetting);

    const userId = useSelector(getUserId);
    const [offset, setOffset] = useState(0);
    const [skipMessages, setSkipMessages] = useState(true);
    const [skipBadges, setSkipBadges] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(true);
    const { data: badgesData, isFetching: isBadgesFetching } =
        useGetSubscriberBadgesByChannelIdQuery({ channelId: selectedChannel ? selectedChannel.userId : 0 }, { skip: skipBadges });
    const { data, error, isFetching } = useGetMessagesByUserIdAndChannelIdQuery({
        userId,
        channelId: selectedChannel?.userId || 0,
        offset,
        sort,
        limit: 100,
    }, { skip: skipMessages });

    const loadNextPage = (startIndex: number) => {
        setOffset(startIndex);
        if (selectedChannel) {
            setSkipMessages(false);
        }
    };

    useEffect(() => {
        if (badgesData) {
            setSkipBadges(true);
        }
    }, [badgesData]);

    useEffect(() => {
        if (selectedChannel) {
            dispatch(clearMessages());
            loadNextPage(0);
            if (isMessagesFetching) {
                addNotification({
                    id: 'notification.chat.sortChange',
                    autoHideDuration: 7000,
                    type: SNACKBAR_TYPE.WARNING,
                    disableReloadButton: false,
                }, dispatch);
            }
        }
    }, [sort]);

    useEffect(() => {
        dispatch(setIsMessagesFetching(isFetching));
    }, [isFetching]);

    useEffect(() => {
        if (selectedChannel) {
            dispatch(clearMessages());
            setSkipBadges(false);
            setHasNextPage(true);
            loadNextPage(0);
        }
    }, [selectedChannel]);

    useEffect(() => {
        if (data) {
            setSkipMessages(true);
            dispatch(pushMessages(data.items));
            if (data && messages.length + data.items.length >= data.total) {
                setHasNextPage(false);
            }
        }
    }, [data]);

    return (
        <div className={b('chat', 'messages')}>
            {selectedChannel && <ErrorBoundary>
                {error && <div className={b('chat', 'messages-error')}>
                    <img
                        alt="clear gif"
                        src="https://cdn.betterttv.net/emote/600f61ebf1cfbf65dbe0c078/3x"
                    />
                </div>}
                {isMessagesFetching && offset === 0 && <Skeleton variant={Skeleton.SKELETON_VARIANT.MESSAGE} />}
                <InifiniteScrollWrapper
                    badgesData={badgesData || {}}
                    hasNextPage={hasNextPage}
                    isNextPageLoading={isBadgesFetching || isMessagesFetching}
                    items={messages}
                    loadNextPage={loadNextPage}
                />
            </ErrorBoundary>}
        </div>
    );
};

export default ChatMessages;
