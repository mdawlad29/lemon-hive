const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1
      className={`${
        className ? className : ""
      } text-primary md:text-5xl font-bold text-center capitalize`}
    >
      {title}
    </h1>
  );
};

export default Heading;
