import { createSelector } from 'reselect';

//state.directory
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector( 
    [selectDirectory],
    directory => directory.sections
)