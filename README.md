# The Green Square Wizard

The solution to your GitHub profile crisis. Do you keep forgetting to make a commit daily to fill up the green squares on your profile? Let the wizard do the job. Be sure to leave a 🌟.

## About

My 11th grade year in high school has now started for me, and with having to keep up with classes, I found it difficult at times to remember to commit something random to get a green square on my profile. So, like any good developer would do, I programmed a simple github bot to take care of my issue. The wizard will "Strike" or make a commit to this repository every 12 hours. This is to prevent a full 24 hours from going by and potentially missing the time. For instance if you had bad internet at one point in time and the commit is made a few seconds later than 24 hours.

## Developer Info

The program itself is ran by a docker container that runs the process. Whilst the process is running, you can go to [localhost:49160](http://localhost:49160) and see a simple but cool web interface that welcomes you to the Green Square Wizard.

#### Tech Stack

- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)

#### Dependencies

- [simple-git](https://www.npmjs.com/package/simple-git)
- [cron](https://www.npmjs.com/package/cron)
- [moment](https://www.npmjs.com/package/moment)
- [jsonfile](https://www.npmjs.com/package/jsonfile)

## Getting Started

To use the wizard, simply clone or fork this repository

    git clone https://github.com/31Carlton7/green_square_wizard

then access the folder

    cd green_square_wizard

lastly run this command

    docker compose up

Then let the wizard go to work.

## Socials

If you have any questions, you can reach me here:

- Instagram: [@31carlton7](https://www.instagram.com/31carlton7/)
- Email: carltonaikins7@gmail.com
