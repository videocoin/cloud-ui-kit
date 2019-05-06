import React, { ReactNode, useState } from 'react';

export interface ToggleContentProps {
  toggle: (snow: () => void) => ReactNode;
  content: (hide: () => void) => ReactNode;
}

const ToggleContent = ({ toggle, content }: ToggleContentProps) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

export default ToggleContent;
