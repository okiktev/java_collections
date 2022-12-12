

collection.push({
    name: 'PriorityQueue',
    desc: ['Приоритетная очередь (PriorityQueue), использующая переданный comparator при вставке нового элемента, либо расстановка элементов осуществляется согласно естественному упорядочиванию (natural ordering).',

'Используя PriorityQueue, можно, например, реализовать алгоритм Дейкстры для поиска кратчайшего пути от одной вершины графа к другой. Либо применять для хранения объектов согласно их приоритету: например, сортировка пациентов врача - экстренные пациенты перемещаются в начало очереди, менее срочные пациенты - ближе к концу очереди.',
    
        'Не поддерживает null.',
        'Нарушает принцип FIFO (First-In-First-Out).',
    ],
	javadoc: 'https://docs.oracle.com/javase/9/docs/api/java/util/PriorityQueue.html',
	methods: [
        'boolean add​(E e)',
        'void clear​()',
        'Comparator<? super E> comparator​()',
        'boolean contains​(Object o)',
        'Iterator<E> iterator​()',
        'boolean offer​(E e)',
        'E peek​()',
        'E poll​()',
        'boolean remove​(Object o)',
        'int size​()',
        'Spliterator<E> spliterator​()',
        'Object[] toArray​()',
        '<T> T[] toArray​(T[] a)',
    ]
})



