import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGES, SEARCH_TYPE, SETTINGS, SORT_ORDER } from 'platform-components/src/components/constants';
import { getLocalStorageValue } from 'platform-components/src/hooks';
import { getDefaultLanguage } from 'platform-components/src/utils';

import { RootState } from '../store';

interface SettingsState {
    sortByDate: SORT_ORDER;
    showBadges: boolean;
    showMessageTime: boolean;
    userType: SEARCH_TYPE;
    liveChatShowBadges: boolean;
    liveChatShowMessageTime: boolean;
    liveChatUseChatColors: boolean;
    language: LANGUAGES;
}

interface UpdateSetting {
    key: string;
    value: unknown;
}

const initialState = (): SettingsState => {
    const defaultLanguage = getDefaultLanguage();

    return {
        sortByDate: getLocalStorageValue(SETTINGS.SORT_BY_DATE, SORT_ORDER.DESC),
        showBadges: getLocalStorageValue(SETTINGS.SHOW_BADGES, true),
        showMessageTime: getLocalStorageValue(SETTINGS.SHOW_MESSAGE_TIME, true),
        userType: getLocalStorageValue(SETTINGS.USER_TYPE, SEARCH_TYPE.USERNAME),
        liveChatShowBadges: getLocalStorageValue(SETTINGS.LIVE_CHAT_SHOW_BADGES, true),
        liveChatShowMessageTime: getLocalStorageValue(SETTINGS.LIVE_CHAT_SHOW_MESSAGE_TIME, true),
        liveChatUseChatColors: getLocalStorageValue(SETTINGS.LIVE_CHAT_USE_CHAT_COLORS, true),
        language: getLocalStorageValue(SETTINGS.LANGUAGE, defaultLanguage),
    };
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSetting: (state, action: PayloadAction<UpdateSetting>) => {
            //@ts-ignore
            state[action.payload.key] = action.payload.value;
        },
    },
});

export const { updateSetting } = settingsSlice.actions;
export const getSettings = (state: RootState) => state.settings;
export const getSortByDateSetting = createSelector(
    getSettings,
    (settings) => settings.sortByDate,
);
export const getShowBadgesSetting = createSelector(
    getSettings,
    (settings) => settings.showBadges,
);
export const getShowMessageTimeSetting = createSelector(
    getSettings,
    (settings) => settings.showMessageTime,
);
export const getUserTypeSetting = createSelector(
    getSettings,
    (settings) => settings.userType,
);
export const getLiveChatShowBadgesSetting = createSelector(
    getSettings,
    (settings) => settings.liveChatShowBadges,
);
export const getLiveChatShowMessageTimeSetting = createSelector(
    getSettings,
    (settings) => settings.liveChatShowMessageTime,
);
export const getLiveChatUseChatColors = createSelector(
    getSettings,
    (settings) => settings.liveChatUseChatColors,
);
export const getLanguage = createSelector(
    getSettings,
    (settings) => settings.language,
);

export default settingsSlice.reducer;
