module.exports = {
  // Настройки для форматирования - ВНЕ массива plugins
  js2svg: {
    // Включаем форматирование для читаемости
    pretty: true,
    // Задаем отступ (количество пробелов)
    indent: 2,
  },

  plugins: [
    // 1. Стандартный набор оптимизаций
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Удаление метаданных редакторов (Inkscape)
          removeEditorsNSData: true, 
          // Удаление пустых контейнеров
          removeEmptyContainers: true, 
        }
      }
    },
    
    // 2. Переименование ID
    {
      name: 'prefixIds',
      params: {
        prefix: '', // Нет префикса
        minify: true, // Сокращаем ID
      }
    },
    
    // 3. Удаление лишних группировок
    'collapseGroups', 
    
    // 4. Сортировка атрибутов
    'sortAttrs',
  ],
};