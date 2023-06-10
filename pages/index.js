import { clientConfig } from '@/lib/server/config'

import Container from '@/components/ContainerPro'
import BlogPost from '@/components/BlogPostPro'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import { useConfig } from '@/lib/config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  console.log('posts', posts);

  const postsToShow = posts.slice(0, clientConfig.postsPerPage)
  // const postsToShow = posts
  const totalPosts = posts.length
  const showNext = totalPosts > clientConfig.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

export default function Blog ({ postsToShow, page, showNext }) {
  const { title, description } = useConfig()

  return (
    <>
      <Container title={title} description={description} nextPage={showNext && (
          <div className='mt-4 w-full flex justify-end'>
           <Pagination page={page} showNext={showNext} />
          </div>
        )}
      >
        {postsToShow.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </Container>

    </>
  )
}
