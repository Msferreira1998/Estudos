export default function funcao(this: Date, arg1: string): void {
  console.log(this, arg1);
}

funcao.call(new Date(), 'Luiz');
funcao.apply(new Date(), ['Luiz']);
