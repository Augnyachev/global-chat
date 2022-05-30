import { TwitchUserId } from './twitch-user';

export interface GetTwitchUserQuery {
    username: string;
    type: 'username' | 'user_id';
}

export interface DisplayNameQuery {
    username: string;
}

export interface GetTwitchUserWithChannelsQuery {
    userId: TwitchUserId;
    channelId: TwitchUserId;
    limit?: number;
    offset?: number;
    sort?: 'desc' | 'asc';
    dateFrom?: Date;
    dateTo?: Date;
}

export interface GetOverallStatsPlotsQuery {
    dateFrom: Date;
    dateTo: Date;
}

export interface UserIdQuery {
    userId: TwitchUserId;
}

export interface ChannelIdQuery {
    channelId: TwitchUserId;
}
