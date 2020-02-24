import { createSelector } from 'reselect';

//state.directory
const selectDirectory = state => state.directory;

//state.directory.sections
export const selectDirectorySections = createSelector( 
    [selectDirectory],
    directory => directory.sections
)