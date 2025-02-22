export const updateOrAdd = <T extends { id: string }>(items: T[], newItem: T): T[] => {
    const index = items.findIndex(item => item.id === newItem.id);
    return index === -1 ? [...items, newItem] : [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1)
    ];
  }