'use client';

import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';

export default function ColorPickerExample() {
  const [color, setColor] = useState('#aabbcc');

  return (
    <div className='p-4 bg-zinc-800 text-white rounded-xl space-y-4'>
      <HexColorPicker color={color} onChange={setColor} />
      <p className='text-sm'>Color seleccionado: {color}</p>
    </div>
  );
}
