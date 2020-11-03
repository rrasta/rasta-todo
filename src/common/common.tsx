import { useState } from 'react';

interface IIDType {
    id: string;
}

/**
 *
 * @param initialValue
 */
export function useList<T extends IIDType>(initialValue: T[]):
    [
        T[],
        (item: Omit<T, 'id'>) => void,
        (id: string, mapFn: (item:T) => T) => void,
        (id: string) => void
    ] {
    const [items, setItems] = useState<T[]>(initialValue);
    const addItem = (item: Omit<T, 'id'>) => {
        setItems([
            ...items,
            {
                ...item,
                id: `item-${new Date().getTime()}`
            } as T
        ])
    }
    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    }
    const updateItem = (id: string, mapFn: (item: T) => T) => {
        setItems(
            items.map(item => {
                if (item.id === id) {
                   return mapFn(item);
                }

                return item;
            })
        )
    }

    return [items, addItem, updateItem, removeItem]
}

