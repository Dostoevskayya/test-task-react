import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ThreeDots } from 'react-loader-spinner';
import '../scss/style.scss';

library.add(fas);

const names = Object.values(fas).map((item) => item.iconName);

function getRandomElement(arr) {
  const randomName = Math.floor(Math.random() * arr.length);

  return names[randomName];
}

function generateRandomColor() {
  const availableHexSymbol = '0123456789ABCDE';
  let color = '';

  for (let i = 0; i < 6; i++) {
    color += availableHexSymbol[Math.floor(Math.random() * availableHexSymbol.length)];
  }

  return '#' + color;
}

function Card() {
  const [icon, setIcon] = useState('cat');
  const [color, setColor] = useState('#bb00ff');
  const [howMuchElemsDoWeLoad, setHowMuchElemsDoWeLoad] = useState(0);

  function onClickIcons() {
    setHowMuchElemsDoWeLoad((state) => ++state);

    setTimeout(() => {
      const randomIconName = getRandomElement(names);
      const randomColor = generateRandomColor();

      setIcon(randomIconName);
      setColor(randomColor);
      setHowMuchElemsDoWeLoad((state) => --state);
    }, 3000);
  }

  return (
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon style={{ color: color }} className="icon fa-xl" icon={icon} />
      </div>
      <button onClick={onClickIcons}>Random icon!</button>
      <div className="loader">
        {howMuchElemsDoWeLoad > 0 && (
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#ff75c5"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
