// https://hc200ok.github.io/vue3-easy-data-table-doc/features/single-field-sorting.html
// https://hc200ok.github.io/vue3-easy-data-table-doc/features/multiple-fields-sorting.html
import { ref, computed } from 'vue';

export const createSortVariables = (defaultSortBy = "id", defaultSortType = "desc") => {
    // Reactive references
    const sortBy = ref(defaultSortBy);
    const sortType = ref(defaultSortType);

    // Computed properties
    const sortedBy = computed(() => sortBy.value);
    const sortedType = computed(() => sortType.value);

    return {
        sortBy,
        sortType,
        sortedBy,
        sortedType
    };
};
