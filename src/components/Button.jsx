export default function Button({ children }) {
  return (
    <button
      type="button"
      className="bg-pinkc hover:bg-pink2c text-white text-xl font-bold pt-2 pb-1 px-8 rounded-full"
    >
      {children}
    </button>
  );
}
