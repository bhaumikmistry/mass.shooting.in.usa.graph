# weather.in.github.contrib.graph-
weather displayed in GitHub Contribution Graph 

## Req steps
- `pip install click` to run the script


## Steps to gather data
- Go to https://massshootingtracker.site/data/
- Click on `Download the Data` button
    - The information will expand
- Go to `JSON files organized by year:` Section
    - Download 2020 2021 files
- Run the cli to create and update data.
    1. `virtualenv venv`
    2. `. venv/bin/activate`
    3. `pip install click`
- After every update to python Script 
    1. `pip install --editable .`
    2. `fetch --ip 2021-data.json --ip 2020-data.json --op op.json`

