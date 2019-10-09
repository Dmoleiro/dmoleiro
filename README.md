How to deploy to github pages...


https://dmoleiro.github.io/dmoleiro/.
```
git subtree split --prefix build -b gh-pages
copy output hash
git push origin {hash}:gh-pages --force
git branch -D gh-pages
```