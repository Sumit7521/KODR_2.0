const select = (elm) => document.querySelector(elm);

const inp = select('.selectimage')
const img = select('.preview')

inp.addEventListener('change', () => {
    const file = inp.files[0];

    if(!(file.type === 'image/png' || file.type === 'image/jpg')) return alert('not valid type');
    if(file.size > 2048) return alert('file must be under 2kb')

    img.src =  URL.createObjectURL(file);
})