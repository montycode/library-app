interface Props {
  query: string;
  assetsType: string;
}

const Header = ({ query, assetsType }: Props) => {
  if (query && assetsType) {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-4 capitalize">{assetsType}</h2>
        <p className="mb-6">
          Search results for &quot;{query}&quot; in {assetsType}
        </p>
      </>
    );
  }

  if (query) {
    return <p className="mb-6">Search results for &quot;{query}&quot;</p>;
  }

  if (assetsType) {
    return (
      <h2 className="text-2xl font-semibold mb-4 capitalize">{assetsType}</h2>
    );
  }

  return <p className="mb-6">Not seeing... try search.</p>;
};

export default Header;
