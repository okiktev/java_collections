

collection.push({
	name: 'EnumSet',
	desc: [
        'EnumSet - это одна из разновидностей реализации интерфейса Set для использования с перечислениями (Enum). EnumSet использует массив битов для хранения значений (bit vector), что позволяет получить высокую компактность и эффективность. В структуре данных хранятся объекты только одного типа Enum, который указывается при создании экземпляра EnumSet. Все основные операции выполняются за константное время (O(1)) и в основном несколько быстрее (хотя и негарантированно), чем их аналоги в реализации HashSet. Пакетные операции (bulk operations, например, containsAll()  и retainAll()) выполняются очень быстро, если их аргументом является экземпляр типа Enum.',
        'Помимо этого класс EnumSet предоставляет множество статических методов инициализации для упрощенного и удобного создания экземпляров.',
        'Итерация по EnumSet осуществляется согласно порядку объявления элементов перечисления.',
    ],
	javadoc: 'https://docs.oracle.com/javase/9/docs/api/java/util/EnumSet.html',
	methods: [
        'static <E extends Enum<E>> EnumSet<E> allOf​(Class<E> elementType)',
        'EnumSet<E> clone​()',
        'static <E extends Enum<E>> EnumSet<E> complementOf​(EnumSet<E> s)',
        'static <E extends Enum<E>> EnumSet<E> copyOf​(Collection<E> c)',
        'static <E extends Enum<E>> EnumSet<E> copyOf​(EnumSet<E> s)',
        'static <E extends Enum<E>> EnumSet<E> noneOf​(Class<E> elementType)',
        'static <E extends Enum<E>> EnumSet<E> of​(E e)',
        'static <E extends Enum<E>> EnumSet<E> of​(E e1, E e2)',
        'static <E extends Enum<E>> EnumSet<E> of​(E first, E... rest)',
        'static <E extends Enum<E>> EnumSet<E> of​(E e1, E e2, E e3)',
        'static <E extends Enum<E>> EnumSet<E> of​(E e1, E e2, E e3, E e4)',
        'static <E extends Enum<E>> EnumSet<E> of​(E e1, E e2, E e3, E e4, E e5)',
        'static <E extends Enum<E>> EnumSet<E> range​(E from, E to)',
    ]
})




