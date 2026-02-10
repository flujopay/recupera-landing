'use client';
/* eslint-disable @next/next/no-img-element */
import { ChevronDown, Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

export type OptionSelect = {
    id: string;
    label: string;
    icon: string | null;
    subValue?: string;
};

interface SimpleCountrySelectProps {
    value: string | null;
    onChange: (value: string) => void;
    options: OptionSelect[];
    placeholder?: string;
}

const SimpleCountrySelect: React.FC<SimpleCountrySelectProps> = ({
    value,
    onChange,
    options = [],
    placeholder = '+51',
}) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter((option) => {
        const label = (option.label || '').toLowerCase();
        const subValue = (option.subValue || '').toLowerCase();
        const term = searchTerm.toLowerCase();
        return label.includes(term) || subValue.includes(term);
    });

    const handleSelect = (option: OptionSelect) => {
        onChange(option.id);
        setOpen(false);
        setSearchTerm('');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectedOption = value ? options.find((opt) => opt.id === value) : null;

    return (
        <div className="relative p-1 pr-0 min-w-[max-content] h-full" ref={selectRef}>
            <div 
                onClick={() => setOpen(!open)} 
                className="cursor-pointer p-1 border border-gray-200 rounded-full flex justify-between items-center text-sm text-gray-700"
            >
                {selectedOption ? (
                    <div className="flex items-center gap-1">
                        {selectedOption.icon && (
                            <img 
                                src={selectedOption.icon} 
                                width={20} 
                                height={12} 
                                alt="flag" 
                                className="w-5 h-3 rounded-sm object-cover" 
                            />
                        )}
                        <span className="text-md font-medium text-black">{selectedOption.label}</span>
                        <ChevronDown size={14} className="text-gray-500" />
                    </div>
                ) : (
                    <div className="flex items-center justify-between w-full">
                        <p className="text-gray-500 ml-2">{placeholder}</p>
                        <ChevronDown size={14} className="ml-1 text-gray-500" />
                    </div>
                )}
            </div>

            {open && (
                <div className="absolute z-20 top-full left-0 w-32 bg-white shadow-lg rounded-lg border border-gray-200 mt-1">
                    <div className="px-2 py-2 border-b border-gray-200">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-md px-2">
                            <Search size={14} className="text-gray-500" />
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Buscar..."
                                className="w-full bg-transparent border-0 py-1.5 focus:outline-none text-xs text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="p-1 max-h-40 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <div 
                                    key={option.id} 
                                    onClick={() => handleSelect(option)} 
                                    className="flex items-center gap-2 px-1 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                                >
                                    {option.icon && (
                                        <img 
                                            src={option.icon} 
                                            alt="flag" 
                                            className="w-5 h-3 rounded-sm object-cover" 
                                        />
                                    )}
                                    <span className="text-xs text-gray-700">{option.label}</span>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center p-2 text-gray-500 text-xs">
                                <span>Sin resultados</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimpleCountrySelect;
