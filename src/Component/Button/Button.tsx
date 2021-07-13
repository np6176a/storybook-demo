import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import './Button.scss'

export interface ButtonProps {
  /**
     * Enable to change button to secondary styling.
     */
  secondary?:boolean;
  /**
     * Enable to change button to tertiary styling.
     */
  tertiary?:boolean;
  disabled?:boolean;
  /**
     * Enable to change button to action button styling. Will also need
     * to pass in a value for icon.
     */
  isActionBtn?: boolean;
  /**
     * Fontawesome value for icon.
     */
  icon?: FontAwesomeIconProps['icon'];
  iconRight?:FontAwesomeIconProps['icon'];
  onClick: ()=> void;
  label?: string;
  /**
     * Add more classes to change styling.
     */
  className?: string;
  style?: object
}

/**
 * By default the component has the primary button styling.
 */
export const Button: React.FC<ButtonProps> = (
  {
    secondary = false,
    tertiary = false,
    isActionBtn = false,
    icon,
    iconRight,
    label,
    onClick,
    disabled = false,
    className,
    style,
  },
) => {
  const btnSecondary = secondary ? 'secondary' : ''
  const btnTertiary = tertiary && !secondary && !isActionBtn ? 'tertiary' : ''
  const btnIsIcon = isActionBtn ? 'iconBtn' : ''

  return (
    <button
      type="button"
      className={`btn ${btnSecondary} ${btnTertiary} ${btnIsIcon} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {isActionBtn ? (
        <>
          {label}
          {icon && <FontAwesomeIcon icon={icon} />}
        </>
      ) : (
        <>
          {icon !== undefined && <FontAwesomeIcon icon={icon} />}
          {label}
          {iconRight !== undefined && <FontAwesomeIcon icon={iconRight} />}
        </>
      )}
    </button>
  )
}
