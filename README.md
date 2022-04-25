## General Info ##
This repository was realized in less than three days, in the context of a #ReactJS-Challenge.

## Docker & make instructions ##
To deploy locally or remotely you'll need [docker-compose](https://docs.docker.com/compose/install/) and [docker-engine](https://docs.docker.com/engine/installation/linux/ubuntulinux/)

Once set up you can run `make [tab]` to see a list of actions:

  *  `make build` to initially build and deploy the container
  *  `make start` to start the containers app
  *  `make stop` to turn off the app
  
Normally you'll only run `make build` only once in a while, `make up` every time you start your env.
But this example is a finall product ready for production so the `up` and the `build`is the same.

## Developement porcess ##
1) I first began this process by studying the given endpoints with [Insomnia](http://insomnia.rest) untill 
I realized the general idea and what I had to do with the UI in order to make it interact with them.
2) After this little research, I began depeloping with a `create-react-app` due to its simplicity 
and my previous experience with the tool. All the work done there can be found in [this](https://github.com/tomaselizondo/ReactDevChallenge-utils) repo.
This strategy have helped me to speed up the general layout developement. 
And I also have used Material UI and Tailwindcss for the same purpose.
3) Then I migrate this layout to the given docker environment and could be able to add grater detail and usability
to each part of the build.
4) After finishing the main layout (dashboard), I started implementing redux for authentication in the `redux-auth` branch.
5) I end up the process by implementing the final docker details for carrying the project to production and merging the `redux-auth` branch to main.
