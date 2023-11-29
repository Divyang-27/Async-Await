const posts = [{ title: "POST1" }];

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function createPost() {
  await wait(3000);
  posts.push({ title: `POST ${posts.length + 1}` });
  const lastActivityTime = await updateLastUserActivityTime();
  return lastActivityTime;
}

async function deletePost() {
  await wait(1000);
  if (posts.length > 0) {
    const deletedPost = posts.pop();
    return deletedPost;
  } else {
    throw new Error("ERROR: ARRAY IS EMPTY");
  }
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let now = new Date();
      let lastActivityTime =
        "Last Activity Time: " +
        now.getHours() +
        "hr" +
        " " +
        now.getMinutes() +
        "min" +
        " " +
        now.getDate() +
        "/" +
        now.getMonth() +
        "/" +
        now.getFullYear();
      console.log(lastActivityTime);
      resolve(lastActivityTime);
    }, 1000);
  });
}

async function postHandling() {
  try {
    const [lastActivityTime] = await Promise.all([
      createPost(),
      updateLastUserActivityTime(),
    ]);
    console.log("Last Activity Time:", lastActivityTime);
    const deletedPost = await deletePost();
    console.log(deletedPost.title);
  } catch (error) {
    console.error(error);
  }
}

postHandling();
