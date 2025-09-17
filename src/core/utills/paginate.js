import _ from "lodash";

export function Paginate(items, pageNumber, pageSize) {
  window.scroll(0, 0);
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
}
