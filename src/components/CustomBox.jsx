export default function CustomBox({ number, title, instruction, textColor }) {
  return (
    <div
      className={`box-border h-44 w-44 md:h-52 md:w-52 p-4 bg-white rounded-md`}
    >
      <p className={`${textColor} text-pinkc font-bold text-3xl`}>{number}</p>
      <p className={`${textColor} font-bold text-2xl uppercase`}>{title}</p>
      <p className={`text-black text-sm`}>{instruction}</p>
    </div>
  );
}
