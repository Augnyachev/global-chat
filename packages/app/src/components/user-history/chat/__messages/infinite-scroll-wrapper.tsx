import { Messages } from 'platform-apis/types';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AutoSizer } from 'react-virtualized';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { getShowBadgesSetting, getShowMessageTimeSetting } from '../../../../store/slices/settings';
import { getUser } from '../../../../store/slices/twitch-user';

import ChatMessage from './chat__message';

interface InfiniteScrollWrapperProps {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: Messages;
    loadNextPage: (startIndex: number) => void;
    badgesData: object;
}

const InfiniteScrollWrapper = ({
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    badgesData,
}: InfiniteScrollWrapperProps) => {
    const showBadges = useSelector(getShowBadgesSetting);
    const showMessageTime = useSelector(getShowMessageTimeSetting);
    const user = useSelector(getUser);

    const itemCount = hasNextPage ? items.length + 1 : items.length;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
    const isItemLoaded = (index: number) => !hasNextPage || index < items.length;
    const rowHeights = useRef({});
    const listRef = useRef<List | null>();

    //@ts-ignore
    const getRowHeight = (index: number) => rowHeights.current[index] || 24;
    const setRowHeight = (index: number, size: number) => {
        if (listRef && listRef.current) {
            listRef!.current!.resetAfterIndex(0);
        }
        rowHeights.current = { ...rowHeights.current, [index]: size };
    };

    useEffect(() => {
        if (listRef && listRef.current) {
            listRef.current.scrollToItem(0);
        }
    }, [badgesData]);

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
            threshold={15}
        >
            {({ onItemsRendered, ref }) => (
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            className="list"
                            height={height}
                            innerElementType="ul"
                            itemCount={items.length}
                            itemSize={getRowHeight}
                            onItemsRendered={onItemsRendered}
                            outerRef={ref}
                            ref={el => (listRef.current = el)}
                            width={width}
                        >
                            {({ index, style }) => (
                                <ChatMessage
                                    badgesData={badgesData}
                                    index={index}
                                    isItemLoaded={isItemLoaded(index + 1)}
                                    message={items[index]}
                                    setRowHeight={setRowHeight}
                                    showBadges={showBadges}
                                    showMessageTime={showMessageTime}
                                    style={style}
                                    user={user}
                                />
                            )}
                        </List>
                    )}
                </AutoSizer>
            )}
        </InfiniteLoader>
    );
};

export default InfiniteScrollWrapper;
