#!/usr/bin/env bash

echo "Estoy en:"
pwd

for filename in out/posts/*.amp.html
do
    echo "AMP Found ->" $filename

if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i "" "s/<style amp-custom><\/style>//g" $filename

    sed -i "" "s/<style>/<style amp-custom>/g" $filename

    sed -i "" "s/&quot;/\"/g" $filename
else
    sed -i -e "s/<style amp-custom><\/style>//g" $filename

    sed -i -e "s/<style>/<style amp-custom>/g" $filename

    sed -i -e "s/&quot;/\"/g" $filename
fi
    
done

cd out/posts

ls -lsa

cd ..
cd ..