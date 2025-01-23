/*
    * Register the Icon component globally
    * define iconify component globally for all app, to avoid import them in every vue file we use them on it
    * another way to define it in every file like
    * import { Icon } from '@iconify/vue'; // not needed while we defined it globally
    * then add Icon to components
 */

import { Icon } from '@iconify/vue';

export default {
    install: (app) => {
        app.component('Icon', Icon);
    },
};
