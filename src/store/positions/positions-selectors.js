export const selectAllPositions = (state) => state.positions

export const selectVisible = (state, filters = []) => {
    if (filters.length === 0) return state.positions

    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages,
            ...pos.tools)

        return filters.every(filter => posFilters.includes(filter))
    })
}