import Link from 'next/link'
import { useConfig } from '@/lib/config'
import FormattedDate from '@/components/FormattedDate'

const BlogPost = ({ post }) => {
  const BLOG = useConfig()

  // return (
  //   <Link href={`${BLOG.path}/${post.slug}`}>
  //     <article key={post.id} className="mb-6 md:mb-8">
  //       <header className="flex flex-col justify-between md:flex-row md:items-baseline">
  //         <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
  //           {post.title}
  //         </h2>
  //         <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
  //           <FormattedDate date={post.date} />
  //         </time>
  //       </header>
  //       <main>
  //         <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
  //           {post.summary}
  //         </p>
  //       </main>
  //     </article>
  //   </Link>
  // )

  return (
    <Link
      href={`${BLOG.path}/${post.slug}`}
      data-placeholder-background="linear-gradient(to bottom, #ece9e6, #ffffff)"
      alt=""
      className="pb-3 md:mt-5 mt-4 md:mr-5 flex flex-col justify-center rounded-b-md shadow-md overflow-hidden mx-auto md:w-80 w-96"
    >
      <img
        data-placeholder-background="linear-gradient(to bottom, #ece9e6, #ffffff)"
        data-alt={post.title}
        src={post.Cover}
        alt=""
        className="lozad block md:w-80 md:h-48 w-96 h-52 rounded-t-md"
      />
      <div
        className="w-full flex justify-between items-center leading-tight pt-4 pl-3 pr-3"
      >
        <div className="text-gray-800 max-h-[20px]">{post.title}</div>
        <div className="text-grey-darker text-sm text-gray-600">{post.date}</div>
      </div>
      <p
        className="text-gray-600 text-sm md:w-78 w-94 overflow-hidden pt-2.5 line-clamp-2 px-3 w-full h-12"
      >
        {post.summary}
      </p>
    </Link>
  )
}

export default BlogPost
