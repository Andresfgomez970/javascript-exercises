const getTheTitles = function(booksInfo) {
    let titles = [];

    for (let i = 0, item; item = booksInfo[i]; i++){
        titles.push(item["title"]);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

