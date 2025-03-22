import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, ZaloIcon } from '../ui/SocialIcons'

const SocialLink = ({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export const SocialContact = () => {
  return (
    <div className="flex gap-6">
      <SocialLink
        target="_blank"
        href="https://github.com/khanhpham1912"
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        target="_blank"
        href="https://www.linkedin.com/in/phamquangkhanh/"
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
      <SocialLink
        target="_blank"
        href="https://zalo.me/0902621322"
        aria-label="Follow on Zalo"
        icon={ZaloIcon}
      />
    </div>
  )
}
