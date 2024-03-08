const TimeCard = ({
  title,
  className,
  descType,
}: {
  title: string;
  className?: string;
  descType?: string;
}) => {
  return (
    <div
      className={`first:mt-0 last:mb-0 flex flex-col md:w-[480px] w-[227px]`}
    >
      <div
        className={`space-y-2 px-[6px] py-[18px] relative ${
          className ? className : ""
        }`}
      >
        <p className={`${descType ? descType : ""} text-sm text-secondary-50`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default TimeCard;
