import Link from "next/link";
const GoBackButton: React.FC = () => {
  return (
    <Link href="/">
      <a className="text-slate-400 px-4 py-1 card">Go back</a>
    </Link>
  );
};

export default GoBackButton;
