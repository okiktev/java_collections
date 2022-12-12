

collection.push({
    name: 'IdentityHashMap',
    desc: ['IdentityHashMap - это структура данных, реализующая интерфейс Map, но использующая сравнение ссылок вместо метода equals() при сравнении ключей (значений). Другими словами, в IdentityHashMap два ключа k1 и k2 будут рассматриваться равными, если выполняется условие k1 == k2.',
        'IdentityHashMap не использует метод hashCode(), вместо которого применяется метод System.identityHashCode(Object).',
        'Другое отличие (как следствие) заключается в более высокой производительности IdentityHashMap по сравнению с HashMap, если последний хранит объекты с дорогостоящими методами equals() и hashCode().',
        'Одним из основных требований к использованию HashMap является неизменяемость ключа, однако это требование не распространяется на IdentityHashMap, который не использует методы equals() и hashCode().',
        'Согласно документации, такая структура данных может применяться для реализации сериализации/клонирования. Для выполнения подобных алгоритмов программе необходимо обслуживать таблицу со всеми ссылками на объекты, которые уже были обработаны. Такая таблица не должна рассматривать уникальные объекты как равные, даже если метод equals() возвращает true.'
    ],
	javadoc: 'https://docs.oracle.com/javase/9/docs/api/java/util/IdentityHashMap.html',
	methods: [
        'void clear​()',
        'Object clone​()',
        'boolean containsKey​(Object key)',
        'boolean containsValue​(Object value)',
        'Set<Map.Entry<K,V>> entrySet​()',
        'boolean equals​(Object o)',
        'void forEach​(BiConsumer<? super K,? super V> action)',
        'V get​(Object key)',
        'int hashCode​()',
        'boolean isEmpty​()',
        'Set<K> keySet​()',
        'V put​(K key, V value)',
        'void putAll​(Map<? extends K,? extends V> m)',
        'V remove​(Object key)',
        'void replaceAll​(BiFunction<? super K,? super V,? extends V> function)',
        'int size​()',
        'Collection<V> values​()',
    ]
})

