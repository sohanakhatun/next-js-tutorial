export default function FeedSlug() {
  return <>Feed Slug</>;
}

// route - /feed/anything.

// but - /feed will give us 404 page as there is no page.tsx for it. either we create a page.tsx for it or if we want to show this FeedSlug on /feed as well , we can rename the [...slug] folder to [[...slug]]