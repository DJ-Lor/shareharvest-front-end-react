export default function CustomButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-pinkc hover:bg-pink2c text-white text-md m:text-xl pt-2 pb-1 px-8 rounded-full"
    >
      {children}
    </button>
  );
}
