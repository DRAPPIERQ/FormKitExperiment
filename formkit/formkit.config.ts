import { fr } from '@formkit/i18n';
import { defineFormKitConfig, createInput } from '@formkit/vue';

import { genesisIcons } from '@formkit/icons';
import { generateClasses } from '@formkit/themes';
import TailwindTheme from './tailwind-theme.js';

import FormKitDigit from '~/components/FormKitDigit.vue';

export default defineFormKitConfig({
  config: {
    classes: generateClasses(TailwindTheme),
  },
  icons: {
    ...genesisIcons,
  },
  locales: { fr },
  locale: 'fr',
  inputs: {
    digit: createInput(FormKitDigit, {
      props: ['digits'],
    }),
  },
});
