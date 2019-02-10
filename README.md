# My portfolio website!

Back to basics! No need for fancy stuff :smile:

### Command Line Friendly

The last part of the index.html is pretty clean :smile:

You can also do: `curl https://selfup.me | grep ,,`

The output with be like:

```bash
selfup@win42 MINGW64 ~/Documents/selfup.github.io (master)
$ curl -s https://selfup.me | grep ,,
  ,, Regis Jean-Pierre Boudinot
  ,, Sr. Software Engineer at Allstate (Dallas, TX)
  ,, Engineers know me as selfup!
  ,, Open Source Engineer
  ,, [JS, Go, Elixir, Rust, Ruby, DevOps]
  ,, Repos
    ,, https://github.com/selfup
    ,, https://gitlab.com/selfup
  ,, Social
    ,, https://twitter.com/rboudinot
    ,, https://www.linkedin.com/in/regisboudinot
  ,, Blog
    ,, https://dom.events
```

If you use `cut -c6-` after grep, it's much cleaner :tada:

```bash
selfup@win42 MINGW64 ~/Documents/selfup.github.io (master)
$ curl -s https://selfup.me | grep ,, | cut -c6-
Regis Jean-Pierre Boudinot
Sr. Software Engineer at Allstate (Dallas, TX)
Engineers know me as selfup!
Open Source Engineer
[JS, Go, Elixir, Rust, Ruby, DevOps]
Repos
, https://github.com/selfup
, https://gitlab.com/selfup
Social
, https://twitter.com/rboudinot
, https://www.linkedin.com/in/regisboudinot
Blog
, https://dom.events
```

### Website

https://selfup.me

### Release Repo

https://github.com/selfup/selfup.github.io

### Dev repo

https://gitlab.com/selfup/selfup.gitlab.io
