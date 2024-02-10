import Layout from '@/components/layout';
import { getSortedPostsData } from '@/lib/posts';
import BlogList from '@/components/pages/blog/blogList';
import HeroSection from '@/components/pages/home/heroSection';
import BlogSection from '@/components/pages/home/blogSection';
import { PostsDataTypes } from '@/interfaces/postData.d';

export default function Home({
  allPostsData,
}: {
  allPostsData: PostsDataTypes[];
}) {
  allPostsData = allPostsData.slice(0, 3);
  return (
    <>
      <Layout>
        <main className="mx-auto w-full">
          <HeroSection />
          <BlogSection>
            {allPostsData.map(({ categories, date, img, slug, title }) => (
              <BlogList
                key={slug}
                categories={categories}
                date={date}
                img={img}
                slug={slug}
                title={title}
              />
            ))}
          </BlogSection>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}