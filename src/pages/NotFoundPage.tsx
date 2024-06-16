const NotFoundPage = (): JSX.Element => {
  const content = (
    <section className="max-w-xl w-full py-6 flex flex-col justify-center items-center gap-8 bg-white rounded-2xl shadow">
      <h1 className="text-9xl text-center text-violet-500 font-normal">404</h1>

      <p className="text-xl">Страница не найдена</p>
    </section>
  );
  return content;
};

export default NotFoundPage;
