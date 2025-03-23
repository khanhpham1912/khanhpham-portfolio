import { ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/ui'

export const Article = ({ article }: { article: ArticleWithSlug }) => {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        <span className="text-lg">{article.title}</span>
      </Card.Title>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        decorate
        className="order-none mt-2 mb-0 text-xs"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}
