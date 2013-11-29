# GitHub Repo Widget

Drop this script on your page and it will build you a beautiful widget that displays the status of your GitHub repo.

## What does it look like?

![Widget Image](http://files.www.newmediacampaigns.com/blog/github-widget.png)

## How do I use it?

Everwhere you want a widget to be placed, add the following markup:

	<div class="github-widget" data-repo="abeisgreat/GitHub-Repo-Widget"></div>

Then include the javascript file somewhere after you've include jQuery:

	<script type="text/javascript" src="githubRepoWidget.min.js"></script>

That's it! All of the styling is included and image assets are pulled from GitHub.

## Wait, isn't this just like that other thing?!?

Yes, it is. Mad props for all the real work goes to [Joel Sutherland](https://github.com/JoelSutherland/) for his original [Github-jQuery-Repo-Plugin](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget). This repo just rips out the jQuery dependency, other than that it's all his excellent work.