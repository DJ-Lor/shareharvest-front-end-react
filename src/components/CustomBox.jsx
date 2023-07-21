export default function CustomBox({ number, title, instruction, textColor }) {
  return (
    <div
      className={`box-content w-44 md:h-44 p-4 bg-white rounded-md md:flex-item`}
    >
      <p className={`${textColor} font-bold text-3xl`}>{number}</p>
      <p className={`${textColor} font-bold text-2xl uppercase`}>{title}</p>
      <p className="text-brownc text-md">{instruction}</p>
    </div>
  );
}
