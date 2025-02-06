# Node.js Server Crash on Unhandled Exceptions

This repository demonstrates a common issue in Node.js servers: crashing on unhandled exceptions without automatic restart. The `bug.js` file shows a basic server that is vulnerable to this problem.  The `bugSolution.js` demonstrates a solution using the `pm2` process manager for restarting the server upon crashes and also adds a custom error handler.

## How to reproduce the bug

1. Clone the repository.
2. Run `node bug.js`.
3. Introduce an unhandled exception in the server code (e.g., referencing a non-existent variable).
4. Observe the server crashing.