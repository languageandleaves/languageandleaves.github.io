const index_top = document.querySelector('.cover.top');
const index_bottom = document.querySelector('.cover.bottom');
const section_language = document.querySelector('.section.language');
const section_leaves = document.querySelector('.section.leaves');
const middle_area = 0.2;

document.addEventListener('mousemove', (e) => {
    const vertical_pct = e.clientY / window.innerHeight;

    if (vertical_pct < 0.5 - middle_area / 2)
        expandTop();
    else if (vertical_pct > 0.5 + middle_area / 2)
        expandBottom();
    else
        clear();
});

document.body.addEventListener('mouseleave', () => {
    clear();
});

document.addEventListener('click', () => {
    if (index_top.classList.contains('expand'))
        window.location.href = '/language';
    else if (index_bottom.classList.contains('expand'))
        window.location.href = '/leaves';
});

function expandTop() {
    console.log('expandTop');
    index_top.classList.add('expand');
    index_top.classList.remove('shrink');
    index_bottom.classList.remove('expand');
    index_bottom.classList.add('shrink');

    section_language.classList.add('expand');
    section_leaves.classList.remove('expand');

    document.body.style.cursor = 'pointer';
}

function expandBottom() {
    console.log('expandBottom');
    index_top.classList.remove('expand');
    index_top.classList.add('shrink');
    index_bottom.classList.add('expand');
    index_bottom.classList.remove('shrink');

    section_language.classList.remove('expand');
    section_leaves.classList.add('expand');

    document.body.style.cursor = 'pointer';
}

function clear() {
    console.log('clear');
    index_top.classList.remove('expand');
    index_top.classList.remove('shrink');
    index_bottom.classList.remove('expand');
    index_bottom.classList.remove('shrink');

    section_language.classList.remove('expand');
    section_leaves.classList.remove('expand');

    document.body.style.cursor = 'default';
}