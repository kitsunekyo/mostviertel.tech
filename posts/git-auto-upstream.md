---
title: 'automatically set git upstream branch'
date: '2021-03-14'
---

By default, when creating a new branch with `git checkout -b mybranch` you cant immediately push via the cli.
You'll be required to set the default upstream branch, ie. tell git what remote branch you want to push to from this local one.

To automatically infer the upstram branch, configure `push.default`. [checkout the official docs](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) to learn more.

```bash
git config --global push.default current
```

When you do a `git push` now, git will automatically push to a remote with exactly the same name as your local branch.