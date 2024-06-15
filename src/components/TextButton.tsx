type TextButtonProps = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
};

const TextButton = ({
  title,
  disabled = false,
  onClick,
}: TextButtonProps): JSX.Element => {
  const button = (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="py-2 px-4 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out"
    >
      {title}
    </button>
  );

  return button;
};

export default TextButton;
