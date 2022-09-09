branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

git add .

git commit -m "feat: changes made on $@"

echo ===================================================
echo Pushing to github branch $branch ...
echo ===================================================
git push origin ${branch}  