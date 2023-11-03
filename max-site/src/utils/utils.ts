export interface IClassNames {
  [className: string]: boolean,
}

export function resolveClassName(classNames: IClassNames) {
  const selectedClasses = Object.keys(classNames).filter((key) => classNames[key]);

  return selectedClasses.join(" ");
}