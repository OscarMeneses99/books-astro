/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, g as renderComponent } from '../astro_87dfba79.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_1fadd4fe.mjs';
import { b as books } from './_book__ffd9960f.mjs';

const $$Astro$3 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
Libros de
<span class="block text-[36px] md:text-[58px]">programación</span></h1>`;
}, "/home/farrukito/Documentos/Projects/books-astro/src/components/Title.astro", void 0);

const $$Astro$2 = createAstro();
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const {
    id,
    title,
    img
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"${addAttribute(`/${id}`, "href")}><img${addAttribute(`Portada del libro ${title}`, "alt")} class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(img, "src")}${addAttribute(`view-transition-name: book-${id}`, "style")}></a>`;
}, "/home/farrukito/Documentos/Projects/books-astro/src/components/BookItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">${books.map(({ id, title, img }) => {
    return renderTemplate`<li>${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "title": title, "img": img })}</li>`;
  })}</ul>`;
}, "/home/farrukito/Documentos/Projects/books-astro/src/components/ListOfBooks.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros de Programaci\xF3n" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="m-auto max-w-4xl">${renderComponent($$result2, "Title", $$Title, {})}${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}</main>` })}`;
}, "/home/farrukito/Documentos/Projects/books-astro/src/pages/index.astro", void 0);

const $$file = "/home/farrukito/Documentos/Projects/books-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
