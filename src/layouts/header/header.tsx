type HeaderProps = {
  title?: string;
};
export const Header = (props: HeaderProps) => {
  return (
    <head>
      <title>{props.title}</title>
    </head>
  );
};
