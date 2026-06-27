import { Link } from 'react-router-dom'
import { Icon } from './icons.jsx'
import cn from '../lib/cn.js'

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  whatsapp: 'btn bg-teal-600 text-white shadow-cta hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-lift',
  gold: 'btn bg-gold-500 text-navy-900 shadow-soft hover:bg-gold-400 hover:-translate-y-0.5',
}
const SIZES = { sm: 'btn-sm', md: '', lg: 'btn-lg' }

/**
 * Polished button/link. Use `to` for internal routes, `href` for external.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconRight,
  className = '',
  fullWidth = false,
  ...props
}) {
  const classes = cn(VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className)
  const inner = (
    <>
      {icon && <Icon name={icon} className="h-[1.15em] w-[1.15em]" />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} className="h-[1.15em] w-[1.15em] transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cn('group', classes)} {...props}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cn('group', classes)} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
        {inner}
      </a>
    )
  }
  return (
    <button className={cn('group', classes)} {...props}>
      {inner}
    </button>
  )
}
