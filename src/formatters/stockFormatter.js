export const formatStock = (stock) => {
    if (stock >= 70) {
        return 'success';
    } else if (stock >= 40) {
        return 'info';
    } else if (stock >= 20) {
        return 'contrast';
    } else if (stock >= 10) {
        return 'warning';
    } else {
        return 'danger';
    }
};
