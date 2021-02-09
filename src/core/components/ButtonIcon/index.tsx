import React from 'react';
import './styles.scss';

type Props = {
  text: string;
}
const ButtonIcon = ({ text }: Props) => (
  <button className="btn-icon  btn-text   button-cursor">
    {text}
  </button>
);

export default ButtonIcon;