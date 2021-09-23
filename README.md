# yt-trend-analysis
Scrape and analyze trending youtube videos for multiple regions and multiple categories.

## Information
Currently the data is collected and no further analysis is performed.

## Requirements
This analysis tool requires following applications/services:
- MongoDB database (stores collected data)
- Redis database (```maxmemory-policy=noeviction```) (stores job information)
- Place where this application is running. (Docker / Nodejs)
## Installation
The **Dockerfile** can be used to deploy the application.

## Configuration
Environment virables are used to configure the application. They can be provided using a docker-compose file or an .env environment file. The following environment variables are supported:
  
| Variable | Default | Description |
| --- | --- | --- |
| MONGO_URI | mongodb://localhost:27017/yta | Connect to mongodb. |
| PORT | 3000 | Application port |
| REDIS_HOST | localhost | Redis host |
| REDIS_PORT | 6379 | Redis port |
| REDIS_PASSWORD | mypassword | Redis password |
| REGIONS| US,DE | List of available regions for the youtube data api v3 |
| CATEGORIES | 0,10,20 | List of categories for the youtube data api v3 which are fetched for each region. |
| YOUTUBE_API_KEY | emptystring | Your YouTube API key used for youtube data api v3. |
| ACCESS_TOKEN_SECRET | supersecrettoken42 | The token used to create jwt for admin user of the dashboard |
| DASHBOARD_ADMIN_PASSWORD | bull | The username of the dashboard administrator (the only user) |
| DASHBOARD_ADMIN_PASSWORD | mypassword | The password of the admin user. |

## View dashboard of job status
The current job status can be found at ```https://localhost:3000/```.