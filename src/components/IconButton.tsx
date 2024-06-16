type IconButtonProps = {
  type?: 'button' | 'submit';
  iconName: string;
  disabled?: boolean;
  onClick?: () => void;
};

const IconButton = ({
  type = 'button',
  iconName,
  disabled = false,
  onClick,
}: IconButtonProps): JSX.Element => {
  const icon: string = new URL(`../assets/${iconName}.svg`, import.meta.url)
    .href;

  const button = (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="p-3 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out absolute right-8 top-1/2 -translate-y-1/2"
    >
      <img src={icon} alt={iconName} className="m-0 w-4 h-4" />
    </button>
  );

  return button;
};

export default IconButton;
