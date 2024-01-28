import {defineStore} from 'pinia'

export const useBoardStore = defineStore('board', {
    state: () => ({
        newBoardDialog: false
    }),
    actions: {
        showNewBoardDialog() {
            this.newBoardDialog = !this.newBoardDialog
        }
    }
})