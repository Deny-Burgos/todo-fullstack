const div = document.querySelector('#btn-bar');

const array = ['signup', 'login', 'exit'];

const LinkBtn = (text, href) => {
  const link = document.createElement('a');
  link.classList.add('bg-slate-700', 'text-white', 'px-4', 'py-2', 'rounded-md', 'hover:bg-slate-800', 'dark:bg-slate-200', 'dark:text-slate-800', 'dark:hover:bg-slate-300', 'transition-all');
  link.innerHTML = text;
  link.href = href;
  div.append(link);
};

if (window.location.pathname === '/') {
  const buttons = array.filter(btn => btn !== 'exit');
  buttons.forEach(btn => {
    LinkBtn(btn, `/${btn}`);
  });
} else if (window.location.pathname === '/signup/') {
  console.log('si');
  LinkBtn('login', '/login');
}