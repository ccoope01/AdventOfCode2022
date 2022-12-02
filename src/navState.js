export function loadFromMenu(menuItem) {
    try {
        this.$router.push('/' + menuItem);
    } catch (error) {
        if (!(error.name === 'NavigationDuplicated')) {
            throw error;
        }
    }
}