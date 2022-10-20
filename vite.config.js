import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    server: {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy':
          "default-src 'self'; require-trusted-types-for 'script';",
      },
    }
  }
})
