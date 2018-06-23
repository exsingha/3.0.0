import React from 'react'
import { Colors, beat, fontSize, MediaQueries } from '../design'
import { showSparklesEffectOnElement } from '../sparkles-effect'

/**
 * @param {MouseEvent} e
 */
function sparkle (e) {
  if (e.target) {
    showSparklesEffectOnElement(e.target)
  }
}

export function ActionButton ({
  href, disabled, primary, children, onClick,
}) {
  return (
    <a
      href={href || `javascript${':'}`}
      onClick={onClick}
      onMouseOver={sparkle}
      onTouchStart={sparkle}
      onFocus={sparkle}
      css={{
        padding: beat(0.5),
        display: 'inline-block',
        border: `1px solid ${primary ? Colors.react : Colors.grey600}`,
        borderTopLeftRadius: beat(0.25),
        borderBottomRightRadius: beat(0.25),
        color: primary ? Colors.brightest : Colors.bright,
        fontSize: fontSize(-2),
        fontWeight: 600,
        opacity: disabled ? 0.25 : 1,
        pointerEvents: disabled ? 'none' : undefined,
        [MediaQueries.md]: {
          width: beat(10),
        },
        transition: 'all ease 0.2s',
        '&:hover': {
          background: primary ? Colors.react : Colors.grey600,
        },
      }}
    >
      {children}
    </a>
  )
}
