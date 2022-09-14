export const GifItem = ({ title, url, id }) => {
  return (
    <a className="card" href={url} target="_blank">
      <img src={url} alt={title} />
      <p>{title}</p>
    </a>
  );
};
