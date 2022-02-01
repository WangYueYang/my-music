declare module '*.svg' {
  const content: React.SVGAttributes<SVGElement>;
  export default content;
}

declare module '*.jpeg' {
  const content: React.ImgHTMLAttributes<HTMLImageElement>;
  export default content;
}