/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.backgroundColor = 'red';

// HtmlElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'sonin';
input.focus();

/* Não Recomendado */
// Type assertion
const body3 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body4 = document.querySelector('body')!;
body4.style.backgroundColor = 'red';
