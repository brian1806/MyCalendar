import React, { useState } from 'react';
import { Switch, Slider, StyledCheckbox } from './styles';

export default function Toggler({ onToggle }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (onToggle) {
      onToggle(!isToggled);
    }
  };

  return (
    <Switch>
      <StyledCheckbox
        type="checkbox"
        name=""
        id=""
        onChange={handleToggle}
        checked={isToggled}
      />
      <Slider className="Slider"></Slider>
    </Switch>
  );
}
