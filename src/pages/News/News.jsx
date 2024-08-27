import { useEffect } from "react";
import { getNews } from "../../services/newsServices";
import useAppContext from "../../hooks/useAppContext";
import Card from "../../components/Card/Card";

const News = () => {
  const { news, newsDispatch } = useAppContext();
  useEffect(() => {
    getNews()
      .then((response) => {
        newsDispatch({
          type: "FETCH_NEWS",
          payload: response,
        });
      })
      .catch((error) => console.error(error));
  }, [newsDispatch]);
  return (
    <main>
      {news.news.length > 0 ? (
        <section>
          {news.news.map((item) => (
            <Card key={item.id} news={item} />
          ))}
        </section>
      ) : (
        <div>...Cargando</div>
      )}
    </main>
  );
};

export default News;
