type ImageProps = {
  src: string;
  alt: string;
  className?: string;
} & Partial<HTMLImageElement>;

const Image = (props: ImageProps) => {
  const imageClassNames = `w-full h-auto rounded-lg ${props.className}`;

  return <img src={props.src} alt={props.alt} className={imageClassNames} />;
};

export { Image };
