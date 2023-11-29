// datePicker.tsx

"use client";

import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface DatePickerProps {
  onDateSelect: (date: Date | null) => void;
}

export default function DatePicker({ onDateSelect }: DatePickerProps) {
  const [value, setValue] = useState<Value>(null);

  useEffect(() => {
    setValue(new Date()); // Asigna la fecha actual al cargar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  const handleDateChange = (date: Value) => {
    setValue(date);
    onDateSelect(date instanceof Date ? date : null);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    return value instanceof Date && date.toDateString() === value.toDateString()
      ? 'active-day'
      : '';
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={value}
        className="date-picker"
        locale="es-ES"
        minDate={new Date('2023-11-01')}
        maxDate={new Date('2025-01-01')}
        tileClassName={tileClassName}
      />
    </div>
  );
}