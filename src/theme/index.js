import { createTheme } from '@mui/material/styles';

const white = '#ffffff';
const black = 'rgba(0, 0, 0, 0.9)';

const palette = {
    white,
    black,
    background: white,
    foreground: black,
    primary: {
        main: '#1976d2',
        carimusPurple: '#1b1542',
        carimusMint: '#bbda80',
    },
    primaryForeground: white,
    danger: { main: '#f44336' },
    dangerForeground: white,
    success: { main: '#4caf50' },
    successForeground: black,
    warn: { main: '#ff9800' },
    warnForeground: black,
    info: { main: '#2196f3' },
    infoForeground: white,
    disabled: 'rgba(0, 0, 0, 0.38)',
    shadow: 'rgba(0,0,0,0.75)',
};

const typography = {
    fontFamily: [
        'Varela Round',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
    ],
    fontSize: 12,
};

const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
};

/**
 * Basic implementations of `theme.breakpoints.up` and `theme.breakpoints.down` from `@material-ui/core`.
 *
 * @see https://material-ui.com/customization/breakpoints/#api
 *
 * @type {{up: (function(*): string), down: (function(*): string)}}
 */
const breakpointsHelpers = {
    up: (key) => {
        const width =
            typeof breakpoints.values[key] === 'number'
                ? breakpoints.values[key]
                : key;
        return `@media (min-width: ${parseInt(width)}px)`;
    },
    down: (key) => {
        const width =
            typeof breakpoints.values[key] === 'number'
                ? breakpoints.values[key]
                : key;
        const calculatedWidth = Math.max(parseFloat(width) - 0.05, 0);
        return `@media (max-width: ${calculatedWidth.toFixed(2)}px)`;
    },
};

export const common = {
    roundiness: 3,
    boxShadow: `0px 4px 10px -5px ${palette.shadow}`,
    disabledOpacity: 0.3,
};

const theme = {
    palette,
    typography,
    common,
    breakpoints: {
        ...breakpoints,
        ...breakpointsHelpers,
    },
};

export default createTheme(theme);
