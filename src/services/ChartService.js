// chartUtils.js

import { Chart, Tooltip } from 'chart.js';
import { tailwindConfig, hexToRGB } from '@/utils/main';

Chart.register(Tooltip);

// Define Chart.js default settings
Chart.defaults.font.family = '"Inter", sans-serif';
Chart.defaults.font.weight = '500';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.mode = 'nearest';
Chart.defaults.plugins.tooltip.intersect = false;
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.caretSize = 0;
Chart.defaults.plugins.tooltip.caretPadding = 20;
Chart.defaults.plugins.tooltip.cornerRadius = 4;
Chart.defaults.plugins.tooltip.padding = 8;

// Register Chart.js plugin to add a bg option for chart area
Chart.register({
    id: 'chartAreaPlugin',
    beforeDraw: (chart) => {
        if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
            const ctx = chart.canvas.getContext('2d');
            const { chartArea } = chart;
            ctx.save();
            ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
            ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            ctx.restore();
        }
    },
});

// Theme colors
const themeColors = [
    '#1BB0E1',
    '#086786',
    '#2ca404',
    '#1a6201',
    '#05c1d3',
    '#05345d',
    '#0c04de',
    '#50021e',
    '#380115',
    '#FBC432',
    '#c59106',
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// to generate random data
export const generateRandomData = (numDataPoints = 12, numDatasets = 1, startMonth = 0) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const labels = Array.from({ length: numDataPoints }, (_, index) => {
        const monthIndex = (startMonth + index) % 12;
        return months[monthIndex];
    });

    const datasets = Array.from({ length: numDatasets }, (_, datasetIndex) => ({
        label: `Data ${datasetIndex + 1}`,
        data: Array.from({ length: numDataPoints }, () => getRandomInt(5, 50)),
        backgroundColor: Array.from({ length: numDataPoints }, () => themeColors[getRandomInt(0, themeColors.length - 1)]),
    }));

    return { labels, datasets };
};


export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};
