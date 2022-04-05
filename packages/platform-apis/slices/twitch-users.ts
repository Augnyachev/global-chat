import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    baseUrl,
    getTwitchUserByUsernameDef,
    getTwitchUserWithChannelsByUsernameDef,
    getTwitchUserWereInterestedByUserIdDef,
    putTwitchUserWereInterestedByUserIdDef,
} from '../api-defs';
import { GetTwitchUserQuery, UserIdQuery, UsernameQuery } from '../types/query';
import { convertTwitchUserApi, TwitchUser, TwitchUserAPI } from '../types/twitch-user';
import { convertTwitchUserChannelsApi, TwitchUserChannels, TwitchUserChannelsAPI } from '../types/twitch-user-channel';

interface TwitchUserWithChannelsResponseTypeRaw {
    user: TwitchUserAPI;
    channels: TwitchUserChannelsAPI;
    messages_dates: Array<string>;
}

interface TwitchUserWithChannelsResponseType {
    user: TwitchUser;
    channels: TwitchUserChannels;
    messagesDates: Array<Date>;
}

interface TwitchUserWereInterestedResponseTypeRaw {
    were_interested: number;
}

interface TwitchUserWereInterestedResponseType {
    wereInterested: number;
}

type TwitchUserResponseType = TwitchUser;

export const twitchUsersApi = createApi({
    reducerPath: 'twitchUsersApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTwitchUserByUsername: builder.query<TwitchUserResponseType, GetTwitchUserQuery>({
            query: getTwitchUserByUsernameDef,
            transformResponse: convertTwitchUserApi,
        }),
        getTwitchUserWithChannelsByUsername:
            builder.query<TwitchUserWithChannelsResponseType, UsernameQuery>({
                query: getTwitchUserWithChannelsByUsernameDef,
                transformResponse: (response: TwitchUserWithChannelsResponseTypeRaw) => {
                    return {
                        user: convertTwitchUserApi(response.user),
                        channels: convertTwitchUserChannelsApi(response.channels),
                        messagesDates: response.messages_dates.map((e) => new Date(e)),
                    };
                },
            }),
        getTwitchUserWereInterestedByUserId:
            builder.query<TwitchUserWereInterestedResponseType, UserIdQuery>({
                query: getTwitchUserWereInterestedByUserIdDef,
                transformResponse: (response: TwitchUserWereInterestedResponseTypeRaw) => ({
                    wereInterested: response.were_interested,
                }),
            }),
        putTwitchUserWereInterestedByUserId:
            builder.query<void, UserIdQuery>({
                query: putTwitchUserWereInterestedByUserIdDef,
            }),
    }),
});

export const {
    useGetTwitchUserByUsernameQuery,
    useGetTwitchUserWithChannelsByUsernameQuery,
    useGetTwitchUserWereInterestedByUserIdQuery,
    usePutTwitchUserWereInterestedByUserIdQuery,
} = twitchUsersApi;
