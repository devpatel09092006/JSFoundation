function fetchPostData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fatched")
        }, 2000); 
    })
}

function fetchCommentData() {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve("Comment data fetched.");
        }, 3000);
    });
}

async function getBlogData () {
    try {
        console.log("Fetching blog data...");

        const [postData, commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()

        ]);

        console.log(postData);
        console.log(commentData);

        console.log("fetch complete");
    }catch (error) {
        console.log("Error fetching blog data: ", error);
    }
}

getBlogData();