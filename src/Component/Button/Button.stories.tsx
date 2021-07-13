import React from 'react'
import { Story, Meta } from '@storybook/react'
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonProps } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => {
  const {
    disabled, icon, isActionBtn, label, onClick, secondary, tertiary,
  } = args

  return (
    <Button
      secondary={secondary}
      tertiary={tertiary}
      disabled={disabled}
      isActionBtn={isActionBtn}
      icon={icon}
      label={label}
      onClick={onClick}
    />
  )
}

export const Primary = Template.bind({ })
Primary.args = {
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  secondary: true,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: 'Button',
  tertiary: true,
}

export const ActionButton = Template.bind({})
ActionButton.args = {
  isActionBtn: true,
  icon: faCogs,
}

export const ButtonWithIcon = Template.bind({})
ButtonWithIcon.args = {
  label: 'Button',
  isActionBtn: false,
  icon: faCogs,
}
