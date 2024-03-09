const ScheduleCard = ({ index }: { index: number }) => {
  return (
    <div className="flex items-center gap-10 rounded-lg bg-white shadow-sm py-[40px] pl-6 pr-14">
      <div className="w-full">
        <div className="flex justify-between mb-5">
          <h1 className="text-primary text-xl font-bold leading-[24px]">
            {index === 0 ? "February 11, 2014" : "October 31, 2017"}
          </h1>

          <span>Wednesday</span>
        </div>

        {[...Array(4)]?.map((_, index) => (
          <div key={index} className="text-base text-primary  mb-4">
            <p>
              Duration:{" "}
              <span>
                {index === 0
                  ? "05:00-06:00"
                  : index === 1
                  ? "06:00-13:30"
                  : index === 2
                  ? "09:00-10:00"
                  : "11:30-12:00"}
              </span>
            </p>

            <li>
              {index === 0
                ? "Registration"
                : index === 1
                ? "Design systems for beginners"
                : index === 2
                ? "Lunch"
                : "Break"}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
