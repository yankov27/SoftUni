function comments(data) {

    let obj = {
        user: [],
        article: [],
        comments: {}
    };

    for (let el of data) {
        if (el.includes('user ')) {
            if (!obj.user.includes(el.split(' ')[1])) {
                obj.user.push(el.split(' ')[1]);
            };
        } else if (el.includes('article ')) {
            if (!obj.article.includes(el.split(' ')[1])) {
                obj.article.push(el.split(' ')[1])
            };
        } else {
            let [userName, article, title, content] = el
                .replace(' posts on ', '*')
                .replace(': ', '*')
                .replace(', ', '*')
                .split('*')

            if (obj.user.includes(userName) && obj.article.includes(article)) {
                if (!obj.comments.hasOwnProperty(article)) {
                    obj.comments[article] = [{
                        [userName]: `--- From user ${userName}: ${title} - ${content}`
                    }]
                } else {
                    obj.comments[article].push({ [userName]: `--- From user ${userName}: ${title} - ${content}` });
                };
            };
        };
    };

    let sortedComents = Object.entries(obj.comments).sort((a, b) => b[1].length - a[1].length);

    for (let [name, comment] of sortedComents) {
        console.log(`Comments on ${name}`);
        for (let el of comment.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))) {
            let [user, comment] = Object.entries(el)[0];
            console.log(comment);
        };
    };
};
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])