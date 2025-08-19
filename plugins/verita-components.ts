import { defineNuxtPlugin } from '#app';
import * as Verita from 'verita-components';
import 'verita-components/dist/verita-components.css';

import { NuxtImg, NuxtLink } from '#components';
export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp } = nuxtApp;

  vueApp.component('NuxtImg', NuxtImg);
  vueApp.component('NuxtLink', NuxtLink);

  Object.entries(Verita).forEach(([name, comp]) => {
    vueApp.component(name, comp as any);
  });
});
