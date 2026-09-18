import { defineConfig } from 'vite';

const repo = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || '';
const isPages = process.env.GITHUB_ACTIONS === 'true' && !!repo;

export default defineConfig({
  base: isPages ? `/${repo}/` : '/'
});