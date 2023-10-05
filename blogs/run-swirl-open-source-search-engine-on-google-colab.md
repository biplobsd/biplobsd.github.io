![Swirl-Preview](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/swirl/swirl-preview.gif)

# Run Swirl Open-Source Search Engine on the Google Colab

Swirl is an open-source Python-based search platform that connects to various data sources, including databases, public data services, and enterprise systems. It provides AI-ranked results and supports Generative AI Models like ChatGPT for answering questions based on your data, all while maintaining ease of use and not requiring data re-indexing.

![Swirl-Homepage](https://res.cloudinary.com/practicaldev/image/fetch/s--X-rNMgzW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x9ontxlnwqgllg71nm3t.png)

So, to give it a try, I have created a Google Colab notebook to run Swirl without setting it up on your local machine. Let's get started 😀.

## Open in Colab

<a href="https://colab.research.google.com/github/biplobsd/swirl-colab/blob/master/swirl_colab.ipynb" target="_parent\"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

Click the "Open in Colab" button above to open the notebook. Then, connect to a new Google Colab runtime backend.

![Connect-Runtime](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/swirl/connect-runtime.png)

## Run Step 1 - Prerequisites Installation

Now, run the prerequisites `setup 1` cell to install udocker and redis-server. In Colab, Docker is not supported yet. For this Docker alternative, I found udocker.

![Step-1](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/swirl/step-1.png)

## Step 2 - Port Forward 8000

In the Google Colab notebook, the local port is not open by default. So, if we want to access the localhost port, we need to port forward it somehow. Run this cell, and you will get a link to access the Google Colab backend at localhost:8000. Do not click that link now because Swirl has not started yet.

![Step-2](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/swirl/step-2.png)

## Step 3 - Starting Swirl Using Udocker

Here is the final cell for starting Swirl. On the first run, udocker will download the `swirlai/swirl-search` image, so please wait for the download. Then, Swirl will automatically start and wait for requests. So, please be patient; it takes almost 2-3 minutes. After that, you will see the message `Listening on TCP address 0.0.0.0:8000` in the console.

![Step-3](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/swirl/step-3.png)

## Finish - Access Swirl

Do not stop the `Step 3` cell. Go back to `Step 2` and click the port-forwarded link.

If you see the message `no tunnel here :(` or any other message, stop the `Step 3` cell, run the `Step 2` cell again to get a new link, and then run the `Step 3` cell again.

Enter the username as `admin` and the password as `password`, and press Login.

![Galaxy-UI](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/swirl/Final.png)

Now, enter any query to try out the open-source Swirl metasearch engine.

## Done

In my trial, Swirl is great—an open-source search engine built with Python. If you're curious about the project's code, visit their GitHub repository.

GitHub: https://github.com/swirlai/swirl-search <br>
Slack: [Swirl Community Slack](https://join.slack.com/t/swirlmetasearch/shared_invite/zt-1qk7q02eo-kpqFAbiZJGOdqgYVvR1sfw)

Thank you for reading and trying this amazing open-source search engine. 🚀🚀🚀
