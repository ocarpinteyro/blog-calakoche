#!/usr/bin/env bash

echo "Estoy en:"
pwd

for filename in out/posts/*.amp.html
do
    echo "AMP Found ->" $filename

    sed -i "" "s/<style amp-custom><\/style>//g" $filename

    sed -i "" "s/<style>/<style amp-custom>/g" $filename

    sed -i "" "s/&quot;/\"/g" $filename
done
