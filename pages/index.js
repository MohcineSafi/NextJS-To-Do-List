import Head from 'next/head';
import TodoList from '../components/TodoList';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next.js Todo List</title>
        <meta name="description" content="A simple to-do list in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoList />
      </main>
    </div>
  );
};
 
export default Home;