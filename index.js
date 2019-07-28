/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */




module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({
      body: 'Thanks for opening this issue!'
    })
    console.log(context.payload)
    try {
      const response = await context.github.issues.createComment(issueComment)
      console.log(response)
    } catch (e) {
      console.log(e)
    }

  })

  app.on('pull_request.opened', async context => {
    const issueComment = context.issue({
      body: 'Thanks for opening the pull request!'
    })
    const pullNumber = context.payload.pull_request.number;
    const repo = context.payload.pull_request.head.repo
    const repoOwner = repo.owner.login
    const repoName = repo.name
    try {
      const response = await context.github.issues.createComment(issueComment)
    } catch (e) {
      console.log(e)
    }
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}


// const commits = await context.github.pullRequests.listCommits({
//   owner: repoOwner,
//   repo: repoName,
//   number: pullNumber
// });
// console.log(commits)