/*
  Punctuation to remove
  [!@#$%^&*()_+={}.,:'"/~`;[\[\]]
*/
const punctuation = /[!@#$%^&*()_+={}.,:'"/~`;[\[\]]/g
const space = /\s+/g;
const multiHyphen = /[-]{2,}/g
const urlBase = 'http://www.myblog.com/'

function blogify(title) {
  let tempTitle = title;
  tempTitle = tempTitle.replace(space, '-');
  tempTitle= tempTitle.replace(punctuation, '');
  tempTitle = tempTitle.toLowerCase().trim();
  tempTitle = tempTitle.replace(multiHyphen, '-');
  return `${urlBase}${tempTitle}/`;
}

const blogs = [
  "My Summer Studying Abroad!!!",
  "Emma's Favorite Books :)",
  "Best Stockholm restaurants in 2021",
  "There  are a     ton of   spaces",
  'This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"',
];

blogs.forEach((blog) => console.log(blogify(blog)));
