export function classNameTW(...stringList: string[]): string {
  let completeString: string = "";

  stringList.forEach((str) => {
    completeString = str + " " + completeString;
  });
  return completeString.trim();
}

export function classNames(...classes: string[]): string {
  return classes.join(` `);
}
