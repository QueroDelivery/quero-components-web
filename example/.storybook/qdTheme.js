import { create } from '@storybook/theming';
import { colors } from '../../src/styles/colors'
import LogoQd from '../src/assets/logo-qd.png'

export default create({
    base: 'light',

    // UI
    // appBg: 'white',
    // appContentBg: colors.white,
    // appBorderColor: 'white',
    // appBorderRadius: 4,

    // Typography
    fontBase: 'MontSerrat, Arial, Helvetica, sans-serif',
    fontCode: 'monospace',

    // Text colors
    // textColor: 'black',
    // textInverseColor: 'rgba(255,255,255,0.)',

    // Toolbar default and active colors
    barTextColor: colors.white,
    barSelectedColor: colors.brand30,
    barBg: colors.brand10,

    // Form colors
    // inputBg: 'white',
    // inputBorder: colors.gray10,
    // inputTextColor: 'black',
    // inputBorderRadius: 4,
    brandUrl: 'https://querodelivery.github.io/quero-components-web/',
    brandImage: LogoQd,
});
