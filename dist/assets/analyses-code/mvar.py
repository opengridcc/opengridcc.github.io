
import requests
import json
import datetime
import time

# You can get your own token at: https://api.slack.com/custom-integrations/legacy-tokens
TOKEN = ''
# Timestamp of 60 days ago
ts_to = time.time() - 60 * 24 * 60 * 60
# Number of files to return
count = 200

url='https://slack.com/api/files.list?token=' + TOKEN + '&ts_to=' + str(ts_to) + '&count=' + str(count)

response = requests.get(url)
response = response.json()
files = response['files']

for i in range(0, len(files)):
    file_id = files[i]['id']

    delete_url = 'https://slack.com/api/files.delete?token=' + TOKEN + '&file=' + str(file_id)

    response = requests.get(delete_url)
    response = response.json()
    print 'delete status ' + str(files[i]['name']) + ' :' + str(response['ok'])