#!/usr/bin/env bash

for filename in out/posts/*.amp.html
do
    sed -i "" "s/<style amp-custom><\/style>//g" $filename

    sed -i "" "s/<style>/<style amp-custom>/g" $filename

    sed -i "" "s/&quot;/\"/g" $filename
done
