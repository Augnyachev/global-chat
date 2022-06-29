import { useFlags } from 'flagsmith/react';
import { useGetOverallStatsPlotsQuery, useGetOverallStatsQuery } from 'platform-apis';
import { H1, WithSkeleton } from 'platform-components';
import { formatDate } from 'platform-components/src/utils';
import React from 'react';
import { useSelector } from 'react-redux';

import ErrorBoundary from '../../containers/error-boundary/error-boundary';
import { getIsPlotsFetching, getIsStatsFetching } from '../../store/slices/overall-stats';

import OverallStatsPlots from './__plots/overall-stats__plots';
import OverallStatsStats from './__stats/overall-stats__stats';

import './overall-stats.scss';

const OverallStats = () => {
    const { showplots } = useFlags(['showplots']);
    const isPlotsFetching = useSelector(getIsPlotsFetching);
    const isStatsFetching = useSelector(getIsStatsFetching);
    const oneMonthAgo = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate());

    useGetOverallStatsQuery();
    useGetOverallStatsPlotsQuery({ dateFrom: formatDate(oneMonthAgo), dateTo: formatDate(new Date()) });

    return (
        <ErrorBoundary>
            <main className="overall-stats">
                <H1 id="overall-stats.header" />
                <WithSkeleton
                    isLoading={isPlotsFetching || isStatsFetching}
                    variant={showplots.enabled ? WithSkeleton.SKELETON_VARIANT.OVERALL_STATS : WithSkeleton.SKELETON_VARIANT.OVERALL_STATS_NO_PLOTS}
                >
                    {showplots.enabled && <OverallStatsPlots />}
                    <OverallStatsStats />
                </WithSkeleton>
            </main>
        </ErrorBoundary>
    );
};

export default OverallStats;
