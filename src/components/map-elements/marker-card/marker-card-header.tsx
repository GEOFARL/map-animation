type Props = {
  minutes: string;
  name: string;
};

const MarkerCardHeader: React.FC<Props> = ({ minutes, name }) => {
  return (
    <div className="body-t1 flex justify-between text-animation-red">
      <p className="font-[700]">
        {minutes} <span className="font-normal">minutes</span>
      </p>
      <p>{name}</p>
    </div>
  );
};

export default MarkerCardHeader;
