// Button.js
import Link from 'next/link';

const Button = ({ destination, children }) => {
  return (
    <Link href={destination}>
        <button className="standard-button">{children}</button>
    </Link>
  );
};

export default Button;
