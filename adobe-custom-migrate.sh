if [[ $1 = "export" ]]; then
    echo "copying needed stuff into migration folder"
    cp -rfv /Users/$USER/Library/Preferences/Adobe\ InDesign/Version\ */en_US/Scripts/Scripts\ Panel .
    cp -rfv /Users/$USER/Library/Preferences/Adobe\ InDesign/Version\ */en_US/Workspaces .
    cp -rfv /Users/$USER/Library/Preferences/Adobe\ InDesign/Version\ */en_US/InDesign\ Shortcut\ Sets .
    cp -rfv /Users/$USER/Library/Preferences/Adobe\ InDesign/Version\ */en_US/Find-Change\ Queries .
    # echo "pushing changes"
    # git add --all
    # echo "enter commit message:"
    # read msg
    # git commit -m "$msg"
    # git push
elif [[ $1 = "import" ]]; then
    # echo "pulling changes"
    # git pull
    echo "copying everything out of migration folder"
    cp -rfv * /Users/$USER/Library/Preferences/Adobe\ InDesign/Version\ */en_US/
else
    echo "specify 'import' or 'export'"
fi
