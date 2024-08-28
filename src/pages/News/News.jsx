import { useEffect } from "react";
// import { getNews } from "../../services/newsServices";
// import useAppContext from "../../hooks/useAppContext";
import NewsItem from "../../components/NewsItem/NewsItem";
import useNews from "../../hooks/useNews";
import { Link } from "react-router-dom";

const News = () => {
  // const { news, newsDispatch } = useAppContext();
  // useEffect(() => {
  //   getNews()
  //     .then((response) => {
  //       newsDispatch({
  //         type: "FETCH_NEWS",
  //         payload: response,
  //       });
  //     })
  //     .catch((error) => console.error(error));
  // }, [newsDispatch]);

  const { news, loading, error, fetchNews } = useNews();

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <p>...Cargando</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <Link to={'/addNews'}>Agregar Noticia</Link>
      {news.length > 0 ? (
        <section>
          {news.map((item) => (
            <NewsItem key={item.id} news={item} />
          ))}
        </section>
      ) : (
        <div>...Cargando</div>
      )}
    </main>
  );
};

export default News;
