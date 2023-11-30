export default function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHtml = html.trim();

  return template.content.firstElementChild;
}