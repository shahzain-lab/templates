import { useTheme } from '@/lib/context/ThemeContext';
import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const { changeTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => changeTheme('green')}>Green</button>
      {/* Add more color options as needed */}
    </div>
  );
};

export default ThemeSwitcher;
