import { defineConfig } from 'astro/config';
import awsAmplify from 'astro-aws-amplify';
import React from '@astrojs/react'
 
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [React()],
  adapter: awsAmplify(),
  output: 'server',
});