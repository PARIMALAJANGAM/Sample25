import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 testMatch:["tests/recorded.test.ts"],
 use: {
    headless:false
 }
});
