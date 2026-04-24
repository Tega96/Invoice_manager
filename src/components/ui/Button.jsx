// src/components/Button.jsx - Professional Complete Version
import { useState } from 'react'

function Button({
  // Content
  children,
  iconLeft,
  iconRight,
  
  // Colors
  variant = 'primary',     // 'primary', 'secondary', 'outline', 'ghost', 'danger'
  bgColor,                 // Custom background color
  textColor = 'white',     // Custom text color
  hoverColor,              // Custom hover color
  
  // Sizes
  size = 'md',            // 'sm', 'md', 'lg', 'xl'
  
  // States
  disabled = false,
  loading = false,
  
  // Functionality
  onClick,
  type = 'button',        // 'button', 'submit', 'reset'
  
  // Styling
  className = '',
  fullWidth = false,
  rounded = 'md',         // 'none', 'sm', 'md', 'lg', 'full'
  
  // Advanced
  as = 'button',          // Can render as 'a' for links
  href,                   // For link buttons
  target,
  ...restProps
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  // ========== SIZE CLASSES ==========
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  // ========== VARIANT CLASSES (Predefined) ==========
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white shadow-sm',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-sm',
    success: 'bg-green-500 hover:bg-green-600 text-white shadow-sm',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
  }
  
  // ========== ROUNDED CLASSES ==========
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }
  
  // ========== CUSTOM COLOR HANDLING ==========
  const getCustomStyles = () => {
    const styles = {}
    if (bgColor) styles.backgroundColor = bgColor
    if (textColor) styles.color = textColor
    if (disabled) styles.opacity = '0.5'
    return styles
  }
  
  const getHoverStyles = () => {
    if (!isHovered) return {}
    if (hoverColor) return { backgroundColor: hoverColor }
    return {}
  }
  
  // ========== BASE CLASSES ==========
  const baseClasses = `
    font-medium
    transition-all
    duration-200
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-blue-500
    disabled:opacity-50
    disabled:cursor-not-allowed
    inline-flex
    items-center
    justify-center
    gap-2
    ${sizes[size]}
    ${roundedClasses[rounded]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `
  
  // ========== GET VARIANT CLASSES ==========
  const getVariantClasses = () => {
    if (bgColor) return '' // Custom colors don't use variant classes
    return variants[variant] || variants.primary
  }
  
  // ========== HANDLE CLICK ==========
  const handleClick = (e) => {
    if (disabled || loading) return
    if (onClick) onClick(e)
  }
  
  // ========== RENDER CONTENT ==========
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading...</span>
        </>
      )
    }
    
    return (
      <>
        {iconLeft && <span className="inline-flex">{iconLeft}</span>}
        {children}
        {iconRight && <span className="inline-flex">{iconRight}</span>}
      </>
    )
  }
  
  // ========== RENDER AS LINK OR BUTTON ==========
  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} ${getVariantClasses()}`}
        style={{ ...getCustomStyles(), ...getHoverStyles() }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...restProps}
      >
        {renderContent()}
      </a>
    )
  }
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${getVariantClasses()}`}
      style={{ ...getCustomStyles(), ...getHoverStyles() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...restProps}
    >
      {renderContent()}
    </button>
  )
}

export default Button