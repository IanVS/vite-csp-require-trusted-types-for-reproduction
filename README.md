This demonstrates a failure when using `require-trusted-types-for 'script'` in CSP during dev.

Note the CSP being set in vite.config.js.  Start up the app using `npm run dev`, open the console, and you'll see something like:

```
This document requires 'TrustedHTML' assignment.
Uncaught TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at updateStyle (client.ts:367:22)
    at style.css:4:1
```

And the app will not load.
