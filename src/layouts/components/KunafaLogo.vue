<template>
    <!-- Small logo icon , TODO: replace with logo (dynamically) -->
    <Icon icon="emojione:up-arrow" class="" />
    <!-- System name -->
    <span class="text-xl font-semibold text-primary mx-2">Kunafa Vue</span>
</template>

<script>
export default {
    name: 'KunafaLogo',
    props: {
        height: {
            type: Number,
            default: 24,
        },
        start: {
            type: String,
            default: 'primary',
        },
        end: {
            type: String,
            default: 'secondary',
        },
    },
}

</script>