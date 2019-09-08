// https://qiita.com/wamei/items/43753e03821964719f31
interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
  currentTarget: T;
}

interface HTMLEvent extends HTMLElementEvent<HTMLInputElement> {}
