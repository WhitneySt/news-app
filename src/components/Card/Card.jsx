import PropTypes from "prop-types";

const Card = ({ news = null }) => {
  return news ? (
    <article>
      <figure>
        <img src={news.photo} alt={news.title} />
        <figcaption>{news.title}</figcaption>
      </figure>
      <p>{news.description}</p>
    </article>
  ) : (
    <div>...Cargando</div>
  );
};

Card.propTypes = {
  news: PropTypes.object
};

export default Card;
